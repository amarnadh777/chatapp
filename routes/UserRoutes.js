const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userController = require('../controllers/userController');
// Register a new user
router.post('/register',userController.registerUser);

router.post('/login', userController.loginUser);

module.exports = router;
