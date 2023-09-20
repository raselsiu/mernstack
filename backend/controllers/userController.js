const Goal = require('../models/goalsModel')
const asyncHandler = require('express-async-handler')


//@des    GET Registered Users
//@route  GET /api/users
//@access Private

const registerUser = asyncHandler(async(req,res) =>{
    res.status(200).json({message:'Register user'})
})

//@des    Authenticate a user
//@route  GET /api/users
//@access Public

const loginUser = asyncHandler(async(req,res) =>{
    res.status(200).json({message:'Login user'})
})

//@des    GET current logged User
//@route  GET /api/users/me
//@access Public

const getLoggedUserData = asyncHandler(async(req,res) =>{
    res.status(200).json({message:'current logged user data get'})
})

module.exports = {
    registerUser,
    loginUser,
    getLoggedUserData
}



