const express = require('express');
const mealplanRouter = express.Router();

mealplanRouter.get('/mealplans', (req, res) => {
    res.json({ message: 'Get all Meal Plans' });
})


module.exports = mealplanRouter;
