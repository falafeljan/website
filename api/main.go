package main

import (
	"github.com/falafeljan/website/api/log"
	"github.com/joho/godotenv"
	"log"
	"net/http"
)

type Adapter func(http.Handler) http.Handler

func Adapt(h http.Handler, adapters ...Adapter) http.Handler {
	for _, adapter := range adapters {
		h = adapter(h)
	}
	return h
}

// Simple logger
func Logging(l *log.Logger) Adapter {
	return func(h http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			l.Println("Logger", r.Method, r.URL.Path)
			h.ServeHTTP(w, r)
		})
	}
}

func cors() Adapter {
   return func(h http.Handler) http.Handler {
     return http.HandlerFunc(func(w *http.ResponseWriter, req *http.Request) {
        (*w).Header().Set("Access-Control-Allow-Origin", "*")
        (*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
        (*w).Header().Set(
            "Access-Control-Allow-Headers",
            "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
     })
   })
}

func indexHandler(w http.ResponseWriter, req *http.Request) {
	setupResponse(&w, req)
	if (*req).Method == "OPTIONS" {
		return
	}

    // process the request...
}

func enableCORS(h http.Handler) http.Handler {
}

func main() {
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal("Error loading `.env` file")
	}

	http.HandleFunc("/log", api_log.Handler)
	log.Fatal(http.ListenAndServe(":3001", nil))
}
