// Import necessary modules
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const mysql = require('mysql2/promise'); 
const NotesRouter = require('./routes/notesRoutes');
const { sequelize } = require('./database/models');


const app = express();

// security best practices
app.use(helmet());
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Routing
app.use('/notes', NotesRouter);

// Welcome route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Notes Projects APIs',
  });
});

app.get('*', (req, res) => {
  res.status(404).json({
    message: "Route doesn't exist",
  });
});

const { PORT, HOST} = process.env;

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Db Connected Successfully');
  } catch (error) {
    console.log(error);
  }
};


const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server is running at ${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
  }
};

startServer();
