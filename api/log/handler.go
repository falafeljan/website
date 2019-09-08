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
	Date     string `json:"date"`
	Location string `json:"location"`
	Slug     string `json:"slug"`
}

type Entry struct {
	Meta    EntryMeta `json:"meta"`
	Content string    `json:"content"`
}

type Response []Entry

var accessToken = os.Getenv("ACCESS_TOKEN")
var clientName = os.Getenv("CLIENT_NAME")
var clientRepo = os.Getenv("CLIENT_REPO")

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

func createClient(accessToken string) (ctx context.Context, client *github.Client) {
	ctx = context.Background()
	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: accessToken},
	)
	tc := oauth2.NewClient(ctx, ts)

	return ctx, github.NewClient(tc)
}

func getSlug(filename string) (slug string) {
	dotIndex := strings.LastIndex(filename, ".")

	if dotIndex > -1 {
		return filename[:dotIndex]
	} else {
		return filename
	}
}

func getEntry(file *github.RepositoryContent, m *front.Matter) (entry Entry, err error) {
	content, err := fetchEntry(file)
	if err != nil {
		return Entry{}, nil
	}

	front, body, err := m.Parse(strings.NewReader(content))
	if err != nil {
		return Entry{}, nil
	}

	meta, err := transformMeta(front)
	if err != nil {
		return Entry{}, nil
	}

	meta.Slug = getSlug(*file.Name)

	entry = Entry{
		Meta:    meta,
		Content: body,
	}

	return entry, nil
}

func findFile(files []*github.RepositoryContent, id string) *github.RepositoryContent {
	for _, file := range files {
		if getSlug(*file.Name) == id {
			return file
		}
	}

	return nil
}

func Handler(w http.ResponseWriter, r *http.Request) {

	ctx, client := createClient(accessToken)

	_, files, _, err := client.Repositories.GetContents(ctx, clientName, clientRepo, "/", nil)

	if err != nil {
		log.Print(err)

		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Internal Server Error"))

		return
	}

	postID := r.URL.Query().Get("id")

	m := front.NewMatter()
	m.Handle("---", front.YAMLHandler)

	var res []byte

	if postID != "" {
		file := findFile(files, postID)
		if file == nil {
			w.WriteHeader(http.StatusNotFound)
			w.Write([]byte("Not Found"))

			return
		}

		entry, err := getEntry(file, m)
		if err != nil {
			log.Print(err)

			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Internal Server Error"))

			return
		}

		res, err = json.Marshal(entry)
		if err != nil {
			log.Print("Failed marshaling API response")

			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Internal Server Error"))

			return
		}
	} else {
		entries := make([]Entry, len(files))

		for i, file := range files {
			entry, err := getEntry(file, m)
			if err != nil {
				log.Print(err)

				w.WriteHeader(http.StatusInternalServerError)
				w.Write([]byte("Internal Server Error"))

				return
			}

			entries[i] = entry
		}

		res, err = json.Marshal(entries)
		if err != nil {
			log.Print("Failed marshaling API response")

			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Internal Server Error"))

			return
		}
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(res)
}


func CreateHandler() http.HandlerFunc {
	return Handler
}
