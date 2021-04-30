
export const getProducts = () => {
    return fetch("http://localhost:8080/products")
      .then(data => data.json())
}

export const getProduct = (id) => {
    return fetch(URL+`/${id}`)
      .then(data => data.json())
}