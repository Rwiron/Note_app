# Introduction to NodeJS

run-time environment for javascript outside a browser. when you install node it ship with NPN (Node package manager)

# Initializing a node packet

`npm init`: initializes a node project

## installing and Uninstalling Node Packages

1. installing: `npm install name_of_package`
2. uninstalling: `npm uninstall name_of_package`

# dotenv (dependency)

this is a package that helps us to be able to get values from the file .env

## Compoments of Server

these are the min compoment a server should have

1. IP(`LOCALHOST OR 127.0.0.1`)
2. PORT
3. HOST

## Function using ES6 and ES5

// ES6
const nameOfFunction - (param1, param2,.....) => {
// block of code
}

// ES5
function nameOfFunction (param1,param2,param3,....){
//block of code
}

//argument are values passed into function when invoking/calling it
nameOfFunction(arg1,arg2,arg3,.....)

## HTTP Status

HTTP Status codes

1. 100 - Continue

2. 200 - OK

3. 201 - Created

4. 202 - Accepted

5. 204 - No Content

6. 302 - Found - (also commonly used for URL redirection or use 303*)*

7. 400 - Bad Request

8. 401 - Unathorized

9. 402 - Payment Required

10. 403 - Forbidden

11. 404 - Not Found

12. 408 - Request Timeout

13. 500 - Internal Server Error

14. 503 - Service unavailable
