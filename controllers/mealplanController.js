const Mealplan = require('../models/Mealplan');

const createMealPlan = async (req,res) => {
    try{
        const newMealPlan = new Mealplan(req.body);
        const savedMealPlan = await newMealPlan.save();
        res.status(201).json({ message: 'Meal Plan Created', mealplan: savedMealPlan });
    } catch (error) {
        res.status(500).json({ message: 'Creating meal plan failed...', error: error.message });
    }
}

const getAllMealPlans = async (req, res) => {
    try {
        const mealplans = await Mealplan.find().select('-__v');
        res.status(200).json({ mealplans });
    } catch (error) {
        res.status(500).json({ message: 'Fetching meal plans failed...', error: error.message });
    }
}

module.exports = {
    getAllMealPlans,
    createMealPlan
}