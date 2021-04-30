URL = 'http://localhost:8080/users';

export const getUsers = () => {
    return fetch(URL)
      .then(data => data.json())
}

export const getUser = (username) => {
    return fetch(URL+`/${username}`)
      .then(data => data.json())
}