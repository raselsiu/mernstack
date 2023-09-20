const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const User = require('../models/usersModel');
const { registerUser, loginUser, getLoggedUserData,  } = require('../controllers/userController');

const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me',getLoggedUserData)


module.exports = router;