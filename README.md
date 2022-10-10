This is a test restful API wich have some authentication endpoints as:
-> Login
-> Register
-> Token Verification using JWT


*This Rest API will be changed in the future.


To use this API as test, you must install the dependencies as:
-> npm install


Before start server, you have to configure your environment variables
according to the .env example in root path. As we used atlas mongodb database,
you have to create a free account on this platform and to configure your database
and get the mongodb link connection with this base. The .env.example has an example.


After this, you can run the following command:
-> node src/index.js


It will start this server in "http://localhost:PORT/", where the PORT
is an environment variable.

====================================================================================
ENDPOINTS

Login -> A get method that receive email and password as query params and return a body with the user and token if 
user exists and error if doesn't.
{
  "email": "pedro.oliveira@usecargo.mobi",
  "password": "dev"
}


Register -> A get method that receive email, password and name as body params and return a body with the user and token if 
user doesn't exists.
{
	"name": "Pedro Oliveira Silva",
  "email": "pedro.oliveira@usecargo.mobi",
  "password": "dev"
}


Token Verification -> receive token and user id as query params and verify if the token is valid, returning a boolean
{
	"token": "Pedro Oliveira Silva",
  "userId": "pedro.oliveira@usecargo.mobi",
}
