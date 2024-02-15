# Introduction to NodeJS

Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.
It's built on the V8 JavaScript engine,which is the same engine that powers Google Chrome.
Node.js uses an event-driven, non-blocking I/O model,which makes
it lightweight and efficient for building scalable network applications.

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

## CORS (Cross-Origin Resource Sharing)

type of headers that allow server to indicate any orgin (domain,shcema.port)

## Export a module (file)

-All files in node js project are modules as they long they can be accessed outside and used

## array containing object

const notes = {
id: 1,
titles,
content
}

## JSON Format

JSON stands for JavaScript Object Notation e.g

`
{
"name": "John Niyontwali",
"position": "Software Developer"
}

{
name: "John",
position: "FS Dev"
}
`

## Mysql2

MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary log protocol, compression, ssl much more.

## Installation

MySQL2 is free from native bindings and can be installed on Linux, Mac OS or Windows without any issues
`npm i mysql2`

