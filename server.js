// import express module
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// create an express applications
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello from the server!' });
})

// listening for incoming request ( start the server )
app.listen (3001, 'localhost', () => {
    console.log( `Server is running http://localhost:3001`);
});

// connect to momgoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connected to MongoDB', err));

