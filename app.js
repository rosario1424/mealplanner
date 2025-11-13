// import express module
const express = require('express');
const mealplanRouter = require('./routes/mealplanRoutes');

// create an express applications
const app = express();

app.use(express.json());

app.use('/mealplans', mealplanRouter);

module.exports = app;