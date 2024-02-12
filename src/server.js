const express = require('express');
require('dotenv').config();

const app = express();

// Set routes
app.get('/', (req, res) => {
  res.send('Let rock');
});

// Define the port number
const port = process.env.PORT,  host = process.env.HOST

// Listening to the server

app.listen(port, () => {
  console.log(`Server Running at ${host}:${port}`); 
}); 
