const express = require('express');
const { getAllMealPlans, createMealPlan, getMealPlanById } = require('../controllers/mealplanController');
const mealplanRouter = express.Router();

mealplanRouter.post('/', createMealPlan);
mealplanRouter.get('/', getAllMealPlans );
mealplanRouter.get('/:id', getMealPlanById);


module.exports = mealplanRouter;
