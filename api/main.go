package main

import (
	"github.com/falafeljan/website/api/log"
	"github.com/joho/godotenv"
	"log"
	"net/http"
)

func main() {
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal("Error loading `.env` file")
	}

	http.HandleFunc("/log", enableDevelopmentCORS(api_log.CreateHandler()))

	log.Print("Listening on port 3001.")
	log.Fatal(http.ListenAndServe(":3001", nil))
}
