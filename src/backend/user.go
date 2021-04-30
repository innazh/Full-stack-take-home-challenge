package main

type User struct {
	Username string `json:"username"`
	RealName string `json:"realname"`
}

func NewUser(username, realName string) User {
	return User{username, realName}
}
