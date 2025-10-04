const express = require('express');
const router = express.Router();
const otpController = require('../controllers/OtpControler');

// Route to create a new OTP message
router.post('/send', otpController.createMessage);





module.exports = router;