// import express module
const express = require('express');

// create an express applications
const app = express();

app.get('/mealplans', (req, res) => {
    res.json({ message: 'Get all Meal Plans' });
})

module.exports = app;