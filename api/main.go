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

	http.HandleFunc("/log", api_log.Handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
