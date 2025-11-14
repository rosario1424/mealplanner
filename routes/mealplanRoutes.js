const express = require('express');
const { getAllMealPlans, createMealPlan, getMealPlanById, updateMealPlan, deleteMealPlan } = require('../controllers/mealplanController');
const { isAuthenticated, allowUsers } = require('../middlewares/auth');
const mealplanRouter = express.Router();

// public routes: anyone can access (no authentication required)
mealplanRouter.get('/',  getAllMealPlans );
mealplanRouter.get('/:id', getMealPlanById);

// protected routes: only authenticated users can access
mealplanRouter.post('/', isAuthenticated, allowUsers(['user', 'admin']), createMealPlan);
mealplanRouter.put('/:id', isAuthenticated, updateMealPlan);

// admin olny route: only admin user can access
mealplanRouter.delete('/:id', isAuthenticated, allowUsers(['admin']), deleteMealPlan);


module.exports = mealplanRouter;
