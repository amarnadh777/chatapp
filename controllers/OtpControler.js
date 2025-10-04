const Message = require("../models/messageModel"); // Adjust path

exports.createMessage = async (req, res) => {
  try {
    const { phone, otp, message } = req.body;

    if (!phone || !otp || !message) {
      return res.status(400).json({ success: false, message: "Phone, OTP, and message are required." });
    }

    // Create new message in DB
    const newMessage = await Message.create({ phone, otp, message });

    // 🔹 Emit to Flutter app via Socket.IO
    const io = req.app.get("io"); // Get io instance
    io.emit("new_sms", {
      phone: newMessage.phone,
      otp: newMessage.otp,
      message: newMessage.message,
      messageId: newMessage._id
    });

    res.status(201).json({
      success: true,
      message: "OTP message created and sent to app successfully.",
      data: newMessage
    });

  } catch (error) {
    console.error("Create OTP message error:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};
