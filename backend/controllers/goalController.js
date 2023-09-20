const User = require('../models/usersModel')
const Goal = require('../models/goalsModel')
const asyncHandler = require('express-async-handler')


//@des    GET goals
//@route  GET /api/goals
//@access Private
const getGoals = asyncHandler(async(req,res) =>{
    const goals = await Goal.find({user:req.user.id})
    res.status(200).json(goals)
})

//@des    SET goals
//@route  SET /api/goals
//@access Private
const setGoals = asyncHandler(async(req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user:req.user.id
    })
    res.status(200).json(goal)
})

//@des    UPDATE goals
//@route  UPDATE /api/goals/:ID
//@access Private
const updateGoals = asyncHandler(async(req,res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)
    // check for user
    if(!user){
        res.status(401)
        throw new Error('User not found!')
    }

    // make sure the logged in user matches the goal user

    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json(updatedGoal)
})

//@des    DELETE goals
//@route  DELETE /api/goals/:ID
//@access Private
const deleteGoals = asyncHandler(async(req,res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)
    // check for user
    if(!user){
        res.status(401)
        throw new Error('User not found!')
    }

    // make sure the logged in user matches the goal user
    
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('not authorized')
    }


    await goal.deleteOne()
    res.status(200).json({id:req.params.id})
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}