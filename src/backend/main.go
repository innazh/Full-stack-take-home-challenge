package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	var c *Client
	c, err := NewClient("sqlite3", "./do.db")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(c.GetUsers())
	fmt.Println(c.GetProducts())

	//Handlers:
	http.HandleFunc("/users", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hell o Wor l d")
		return
	})
	http.HandleFunc("/products", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "products")
		return
	})
	http.HandleFunc("/userproducts", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "userproducts")
		return
	})

	err = http.ListenAndServe(os.Getenv("HOST")+":"+os.Getenv("PORT"), nil)
	if err != nil {
		log.Fatal(err)
	}
}
