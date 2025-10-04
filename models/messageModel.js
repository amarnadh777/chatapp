const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  phone: { type: String, required: true },     // Recipient phone number
  otp: { type: String, required: true },       // OTP code
  message: { type: String, required: true },   // SMS content
  status: { type: String, enum: ['pending', 'sent', 'failed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

module.exports = mongoose.model("Message", messageSchema);
