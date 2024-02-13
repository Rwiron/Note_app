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

## Importing Necessary Modules

javascriptCopy code
const express = require("express"); const router = express.Router(); 
•	const express = require("express");: This line imports the Express framework into your file, allowing you to use its functionalities to create server and router instances, handle requests, and send responses.

•	const router = express.Router();: Here, you're creating a new router object. This router will handle routing for your application, allowing you to define routes that are mounted at a specific path. The router behaves like a mini application, capable of performing middleware and routing functions.

## Defining a Route Handler

const notes = [ { id: 1, title: "Note 1", content: "This is the content of note 1." }, { id: 2, title: "Note 2", content: "This is the content of note 2." }, // Add more notes as needed ]; 
•	This part of the code defines a constant array named notes, which serves as a mock database for your application. Each object in the array represents a note, with each note having an id, title, and content property. This structure allows you to simulate storing and retrieving data without the need for a real database, which is particularly useful for development and testing.


## Defining a Route Handler

router.get("/", (req, res) => { return res.status(200).json({ message: "All notes", data: notes, }); }); 
•	router.get("/", (req, res) => {...}): This line defines a route handler for GET requests to the root path ("/") of the router. When this route is accessed, the callback function is executed.
•	req is the request object, containing information about the HTTP request that raised the event. In this context, it's not used since you're simply returning all notes regardless of the request details.
•	res is the response object, used to send back the desired HTTP response.
•	res.status(200).json({...}): This sends a response back to the client with a status code of 200 (OK). The response body is a JSON object containing a message and the data of all notes. json({...}) automatically sets the Content-Type header to application/json and converts the JavaScript object to a JSON string.


## Exporting the Router
module.exports = router; 
•	This line exports the router object so it can be imported and used in other files, such as your application's entry point file (server.js or app.js). By exporting the router, you modularize your route handling, making your code cleaner and more maintainable.



