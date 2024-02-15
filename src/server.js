// Import necessary modules
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const mysql = require('mysql2/promise'); 
const NotesRouter = require('./routes/notesRoutes');

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

const { PORT, HOST, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const connectToDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_DATABASE,
    });
    console.log('Connected to MySQL database!');
    return connection;
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1); 
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
