# Full Stack Coding Challenege

At DigitalOcean we're looking for people who will be valuable members of an engineering team. We have found that whiteboard coding and brain teasers provide no insight into how well a person may contribute to an engineering team. With that in mind, this exercise is intended to provide an opportunity to shed some light on your skills and experiences and provide a context for talking about engineering skills in order to get an idea of if this is a good fit for everyone.

## Important!

As we know many applicants have full time jobs, families and lives outside of work, it should be noted that we do not have a firm deadline to complete this challenge.

In addition, we are not looking for perfection with this challenge. The goal is to show your skills and provide a place for us to talk in depth about them. While we will review the code, unless it is absoutely clear this isn't a good fit, any decision to move forward in the process will happen after the in-person review. If you have existing code you'd like to use that can be clearly attributed to you, please let your recruiter know and we can review that instead.

## The Challenge

The challenge is to build a really basic website from a SQL database. The website is a simple internal application that shows what products are used by different users. You are welcome to display this data however you'd like. You can create anything from a single page app to a traditional request/response based system. The goal is to show us your skills, so do what you do best!

### The Data

Included with the challenge is a sqlite database with some tables describing user data. Here is the schema.

```
CREATE TABLE users (username text, realname text);
CREATE TABLE products (id text, name text);
CREATE TABLE user_products (user text, product text);

```

The `user_products` table allows for joining the `users` and `products`.

### The UI

The use case is to allow an internal user to see what products are used by what users and what users are using what products. A simple table is fine, as is a single page app with dynamic elements. Again, do what you know how to do!

You can feel free to use whatever frontend tools you are comfortable with.

### The How

There are a few important rules to follow:

 1. Use source control (git)
 2. Use docker and docker compose to deliver your submission (more on that later)
 3. A README with any documentation necessary to run your submission and provide any insights into what you were trying to accomplish.

When we get a submission, we'll plan on running `docker-compose up` and having a working website we can view the browser.

### Getting Started

Included in the challenge is a `docker-compose.yml` file for
running the beginnings of a node.js application using
[docker-compose](https://docs.docker.com/compose/). To start the
appliction, you can run:

```
$ docker-compose up
```

It will build the respective docker images and start a [node.js](https://nodejs.org) server using the [express](https://expressjs.com) library. The server code is in `src/app.js`.

You are more than welcome to use your web backend of choice. Just be sure adjust the provided Dockerfile accordingly.
