const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const User = require('../models/usersModel');
const { registerUser, loginUser, getLoggedUserData,  } = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me',protect,getLoggedUserData)


module.exports = router;