package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
)

func setCommonHeaders(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "http://127.0.0.1:3000")
		h.ServeHTTP(w, r)
	})
}

func main() {
	var c *Client
	l := log.New(os.Stdout, "server: ", log.LstdFlags|log.Lshortfile)

	c, err := NewClient("sqlite3", "./do.db")
	if err != nil {
		l.Fatal(err)
	}

	//Handlers:
	http.HandleFunc("/users", func(w http.ResponseWriter, r *http.Request) {
		var u []User
		u = c.GetUsers()

		e := json.NewEncoder(w)
		err := e.Encode(u) //redundant to pass a reference as slices are always passed this way
		if err != nil {
			l.Fatal(err)
		}

		return
	})

	http.HandleFunc("/products", func(w http.ResponseWriter, r *http.Request) {
		var p []Product
		p = c.GetProducts()

		e := json.NewEncoder(w)
		err := e.Encode(p)
		if err != nil {
			l.Fatal(err)
		}

		return
	})

	http.HandleFunc("/userproducts", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "userproducts")
		return
	})

	fmt.Println("Server is running on port: ", os.Getenv("PORT"))
	err = http.ListenAndServe(os.Getenv("HOST")+":"+os.Getenv("PORT"), setCommonHeaders(http.DefaultServeMux))
	if err != nil {
		l.Fatal(err)
	}
}
