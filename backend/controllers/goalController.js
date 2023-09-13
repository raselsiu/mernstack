//@des    GET goals
//@route  GET /api/goals
//@access Private
const getGoals = (req,res) =>{
    res.status(200).json({message:'get goals'})
}

//@des    SET goals
//@route  SET /api/goals
//@access Private
const setGoals = (req,res) =>{
    res.status(200).json({message:'set goals'})
}

//@des    UPDATE goals
//@route  UPDATE /api/goals/:ID
//@access Private
const updateGoals = (req,res) =>{
    res.status(200).json({message:`update goals ${req.params.id}`})
}

//@des    DELETE goals
//@route  DELETE /api/goals/:ID
//@access Private
const deleteGoals = (req,res) =>{
    res.status(200).json({message:`deleted goals ${req.params.id}`})
}


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}