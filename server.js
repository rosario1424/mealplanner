// import express module
const express = require('express');

// create an express applications
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello from the server!' });
})

// listening for incoming request ( start the server )
app.listen (3001, 'localhost', () => {
    console.log( `Server is running http://localhost:3001`);
});
