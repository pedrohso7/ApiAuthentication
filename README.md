![🔐_Authentication_API_Example](https://user-images.githubusercontent.com/32853995/195391392-9b47c284-f0eb-4e50-ae31-c321fd8758f6.png)


<div align="center">
          
<a href="https://github.com/pedrohso7/apiTestAuthentication/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/pedrohso7/apiTestAuthentication"></a> <a href="https://github.com/pedrohso7/apiTestAuthentication/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/pedrohso7/apiTestAuthentication"></a>
</div>
          
<p align="center">
  <a href="#-project">Project</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-overview">Overview</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-usage">Usage</a>
</p>

## ✦ Project
<p align="justify">
This is a test restful API wich have some authentication endpoints as:
-> Login
-> Register
-> Token Verification using JWT.
It was made to test my personal mobile projects, especially [this](https://github.com/pedrohso7/mobileCleanProjectTemplate)
</p>

## ✦ Technologies
Esse projeto foi desenvolvido com as seguintes tecnologias:
- [NodeJs](https://nodejs.org/en/)
- [BCrypt](https://www.npmjs.com/package/bcrypt)
- [Express](https://expressjs.com/pt-br)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)

## ✦ Overview
<p align="justify">
You can freely use this endpoints:
</p>

<h4>Login: /auth/login</h4>

<ṕ align="justify">
A get method that receive email and password as query params and return a body with the user and token if user exists.
query_params: {
  "email": "pedro.oliveira@teste.com",
  "password": "dev"
}
</p>

<h4>Register: /auth/register</h4>

A get method that receive email, password and name as body params and return a body with the user and token if user doesn't exist.
body_params: {
  "name": "Pedro Oliveira Silva",
  "email": "pedro.oliveira@teste.com",
  "password": "dev"
}
</p>

<h4>Token Verification using JWT: /auth/token</h4>

<ṕ align="justify"> 
A get method that receive token and user id as query params and verify if the token is valid, returning a boolean
query_params: {
  "token": "Pedro Oliveira Silva",
  "userId": "pedro.oliveira@usecargo.mobi",
}
</p>

## ✦ Usage
<p align="justify">
First you have to create your .env file on root path following .env.example and then you're prepared to run and use the server.
</p>


<p align="justify">
Make sure you're on the root path and run the following command to get the dependencies using
</p>

```
npm install
```

<p align="justify">
Now you can run server:
</p>

```
node src/index.js
```

## ✦ Start to use

<p align="justify">
Clone this and use in your test.
</p>
