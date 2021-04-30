package main

type Product struct {
	Id   string `json:"id"`
	Name string `json:"name"`
}

func NewProduct(id, name string) Product {
	return Product{id, name}
}
