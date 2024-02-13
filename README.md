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
