const express = require('express');
const { getAllMealPlans, createMealPlan, getMealPlanById, updateMealPlan, deleteMealPlan } = require('../controllers/mealplanController');
const { isAuthenticated } = require('../middlewares/auth');
const mealplanRouter = express.Router();

mealplanRouter.post('/', createMealPlan);
mealplanRouter.get('/', isAuthenticated, getAllMealPlans );
mealplanRouter.get('/:id', getMealPlanById);
mealplanRouter.put('/:id', updateMealPlan);
mealplanRouter.delete('/:id', deleteMealPlan)


module.exports = mealplanRouter;
