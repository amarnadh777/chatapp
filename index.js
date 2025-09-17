const express = require("express")
const app = express()
require('dotenv').config();
const mongoose = require("mongoose")
const cors = require("cors")
const UserRoutes = require("./routes/UserRoutes")

app.use(cors())
app.use(express.json())
app.use("/api/user", UserRoutes)


app.get("/", (req, res) => {
    res.send("SERVER IS RUNNING 🚀🚀🚀🚀🚀")
})





app.listen(3000, () => {
    console.log("Server is running on port 3000")
})