const Mealplan = require('../models/Mealplan');
const sendEmail = require('../utils/Email');
const User = require('../models/User');

const createMealPlan = async (req,res) => {
    try{
        const newMealPlan = new Mealplan(req.body);
        const savedMealPlan = await newMealPlan.save();

        const user = await User.findById(req.userId);

        //send an email notification to admin
        await sendEmail(
            user.email,
            'New Meal Plan Created',
            `A new meal plan titled "${savedMealPlan.dietType}" has been created.`
        )

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

const getMealPlanById = async (req, res) => {
    try {
      const id = req.params.id;
      const mealplan = await Mealplan.findById(id).select('-__v');
      
      if (!mealplan) {
            return res.status(404).json({ message: 'Meal Plan not found' });
      }

      res.status (200).json({ mealplan });

    } catch (error) {
        res.status(500).json({ message: 'Fetching meal plan failed...', error: error.message  });
    }
}

const updateMealPlan = async (req, res) => {
    try {
        // get the id from the url params
        const id = req.params.id;

        // get the data to update from the request body
        const updateData = req.body;

        // find the meal plan by id and update it with the new data
        const updatedMealPlan = await Mealplan.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedMealPlan) {
            return res.status(404).json({ message: 'Meal plan not found' });
        }

        res.status(200).json({ message: 'Meal plan Updated', mealplan: updatedMealPlan });

    } catch (error) {
        res.status(500).json({ message: 'Updating meal plan failed...', error: error.message  });
    }
}

const deleteMealPlan = async (req, res) => {
    try {
        // get the id from the url params
        const id = req.params.id;

        const mealPlanDeleted = await Mealplan.findByIdAndDelete(id);

        if (!mealPlanDeleted) {
            return res.status(404).json({ message: 'Meal plan not found' });
        }

        res.status(200).json({ message: 'Meal plan Deleted', mealplan: mealPlanDeleted });
    } catch (error) {
         res.status(200).json ({ message: 'Deleting meal plan failed...', error: error.message });
    }
}

module.exports = {
    getAllMealPlans,
    createMealPlan,
    getMealPlanById,
    updateMealPlan,
    deleteMealPlan
}