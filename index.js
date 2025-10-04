const express = require("express")
const app = express()
require('dotenv').config();
const mongoose = require("mongoose")
const cors = require("cors")
const UserRoutes = require("./routes/UserRoutes")
const connectDB = require("./config/db")
connectDB()
app.use(cors())
app.use(express.json())
app.use("/api/user", UserRoutes)
app.use("/api/otp", require("./routes/OtpRoutes"))

app.get("/", (req, res) => {
    res.send("SERVER IS RUNNING 🚀🚀🚀🚀🚀")
})

// --- Socket.IO setup ---
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.set("io", io);

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);



    socket.on('test', (data) => {
        console.log('Test event received:', data);
    })
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Broadcast message to all clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});



// --- Listen on http server instead of app ---
http.listen(3000, () => {
    console.log("Server is running on port 3000")
})