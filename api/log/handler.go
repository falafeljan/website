package api_log

import (
	"context"
	"encoding/json"
	"github.com/gernest/front"
	"github.com/google/go-github/v26/github"
	"github.com/mitchellh/mapstructure"
	"golang.org/x/oauth2"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
)

type EntryMeta struct {
	Title    string `json:"title"`
	Category string `json:"category"`
	Date     string `json:"date "` // TODO timestamp
	Location string `json:"location"`
}

type Entry struct {
	Meta    EntryMeta `json:"meta"`
	Content string    `json:"content"`
}

type Response []Entry

func fetchEntry(file *github.RepositoryContent) (content string, err error) {
	resp, err := http.Get(file.GetDownloadURL())
	if err != nil {
		return "", err
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	return string(body), nil
}

func transformMeta(front map[string]interface{}) (meta EntryMeta, err error) {
	err = mapstructure.Decode(front, &meta)
	return meta, err
}

func Handler(w http.ResponseWriter, r *http.Request) {
	accessToken := os.Getenv("ACCESS_TOKEN")
	clientName := os.Getenv("CLIENT_NAME")
	clientRepo := os.Getenv("CLIENT_REPO")

	ctx := context.Background()
	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: accessToken},
	)
	tc := oauth2.NewClient(ctx, ts)

	client := github.NewClient(tc)
	_, files, _, err := client.Repositories.GetContents(ctx, clientName, clientRepo, "/", nil)

	if err != nil {
		log.Fatal("Failed fetching log repository")

		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Internal Server Error"))
	}

	m := front.NewMatter()
	m.Handle("---", front.YAMLHandler)

	entries := make([]Entry, len(files))

	for i, file := range files {
		content, err := fetchEntry(file)
		if err != nil {
			log.Fatal("Failed fetching log entry")

			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Internal Server Error"))
		}

		front, body, err := m.Parse(strings.NewReader(content))
		if err != nil {
			log.Fatal("Failed handling log entry")

			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Internal Server Error"))
		}

		meta, err := transformMeta(front)
		if err != nil {
			log.Fatal(err)
			log.Fatal("Failed parsing log entry meta")

			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Internal Server Error"))
		}

		entry := Entry{
			Meta:    meta,
			Content: body,
		}

		entries[i] = entry
	}

	res, err := json.Marshal(entries)
	if err != nil {
		log.Fatal("Failed marshaling API response")

		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Internal Server Error"))
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(res)
}
