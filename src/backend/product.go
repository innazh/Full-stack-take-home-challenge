package main

type Product struct {
	id   string
	name string
}

func NewProduct(id, name string) Product {
	return Product{id, name}
}
