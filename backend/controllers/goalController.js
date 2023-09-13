const asyncHandler = require('express-async-handler')


//@des    GET goals
//@route  GET /api/goals
//@access Private
const getGoals = asyncHandler(async(req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:'get goals'})
})

//@des    SET goals
//@route  SET /api/goals
//@access Private
const setGoals = asyncHandler(async(req,res) =>{
    res.status(200).json({message:'set goals'})
})

//@des    UPDATE goals
//@route  UPDATE /api/goals/:ID
//@access Private
const updateGoals = asyncHandler(async(req,res) =>{
    res.status(200).json({message:`update goals ${req.params.id}`})
})

//@des    DELETE goals
//@route  DELETE /api/goals/:ID
//@access Private
const deleteGoals = asyncHandler(async(req,res) =>{
    res.status(200).json({message:`deleted goals ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}