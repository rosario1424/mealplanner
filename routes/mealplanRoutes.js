const express = require('express');
const { getAllMealPlans, createMealPlan } = require('../controllers/mealplanController');
const mealplanRouter = express.Router();

mealplanRouter.post('/', createMealPlan);
mealplanRouter.get('/', getAllMealPlans );


module.exports = mealplanRouter;
