const express = require('express');
const { getAllMealPlans } = require('../controllers/mealplanController');
const mealplanRouter = express.Router();

mealplanRouter.get('/mealplans', getAllMealPlans )


module.exports = mealplanRouter;
