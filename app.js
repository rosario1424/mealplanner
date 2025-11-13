// import express module
const express = require('express');
const mealplanRouter = require('./routes/mealplanRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

// create an express applications
const app = express();

//middleware to parse JSON request bodies
app.use(express.json());

// midleware to parser cookies
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/mealplans', mealplanRouter);

module.exports = app;