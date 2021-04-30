package main

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

type Client struct {
	db *sql.DB
}

func NewClient(driverName, dataSource string) (*Client, error) {
	db, err := sql.Open(driverName, dataSource) //"sqlite3", "./foo.db"
	return &Client{db}, err
}

//TODO: look into GORM
func (c *Client) GetUsers() []User {
	var users []User
	var username string
	var realName string

	rows, err := c.db.Query("SELECT * FROM users;")
	checkErr(err)

	for rows.Next() {
		err = rows.Scan(&username, &realName)
		users = append(users, NewUser(username, realName))
		checkErr(err)
	}

	rows.Close()
	return users
}

func (c *Client) GetProducts() []Product {
	var prods []Product
	var id string
	var name string

	rows, err := c.db.Query("SELECT * FROM products;")
	checkErr(err)

	for rows.Next() {
		err = rows.Scan(&id, &name)
		prods = append(prods, NewProduct(id, name))
		checkErr(err)
	}

	rows.Close()
	return prods
}

//TODO: modify
func checkErr(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
