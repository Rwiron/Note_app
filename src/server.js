const express = require("express");
require("dotenv").config();

const app = express();

// Set routes
app.get("/", (req, res) => {
  res.status(201).json({
    message: "Acoount created successfully",
  });
});

// Define the port number
const { PORT, HOST } = process.env;

// Listening to the server
app.listen(PORT, () => {
  console.log(`Server is Running at ${HOST}:${PORT}`);
});
