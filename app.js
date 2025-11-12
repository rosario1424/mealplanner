// import express module
const express = require('express');
const mealplanRouter = require('./routes/mealplanRoutes');

// create an express applications
const app = express();

app.use('/', mealplanRouter);

module.exports = app;