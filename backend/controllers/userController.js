const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/usersModel')
const asyncHandler = require('express-async-handler')


//@des    GET Registered Users
//@route  GET /api/users
//@access Private

const registerUser = asyncHandler(async(req,res) =>{

    const {name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }
    // check user exists

    const existsUser = await User.findOne({email})

    if(existsUser){
        res.status(400)
        throw new Error('User already exists')
    }

    //Hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    //Creating user

    const user = await User.create({
        name,
        email,
        password:hashedPassword
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    } 
    else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

//@des    Authenticate a user
//@route  GET /api/users
//@access Public

const loginUser = asyncHandler(async(req,res) =>{
    const {email, password} = req.body

    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid Credentials')
    }
    
})

//@des    GET current logged User
//@route  GET /api/users/me
//@access Private

const getLoggedUserData = asyncHandler(async(req,res) =>{
    const {_id,name,email} = await User.findById(req.user.id)
    res.status(200).json({
        id:_id,
        name,
        email
    })
})


// Generate JWT
const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}


module.exports = {
    registerUser,
    loginUser,
    getLoggedUserData
}



