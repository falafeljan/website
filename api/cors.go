package main

import (
	"net/http"
	"os"
)

func enableDevelopmentCORS(h http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		if os.Getenv("DEBUG") == "true" {
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
			w.Header().Set(
				"Access-Control-Allow-Headers",
				"Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

			if (*req).Method == "OPTIONS" {
				return
			} else {
				h.ServeHTTP(w, req)
			}
		} else {
			h.ServeHTTP(w, req)
		}
	})
}
