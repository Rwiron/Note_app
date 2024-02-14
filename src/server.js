const express = require("express");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const Notesrouter = require("./routes/notesRoutes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/notes", Notesrouter);

// Set routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Notes Projects APIs",
  });
});

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Route doesn't exist",
  });
});

// Define the port number
const { PORT, HOST } = process.env;

// Listening to the server
app.listen(PORT, () => {
  console.log(`Server is Running at ${HOST}:${PORT}`);
});
