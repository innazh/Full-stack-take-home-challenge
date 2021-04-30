package main

type User struct {
	username string
	realName string
}

func NewUser(username, realName string) User {
	return User{username, realName}
}
