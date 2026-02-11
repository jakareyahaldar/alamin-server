const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    password: String
})

const userCon = mongoose.model("user",userSchema)

module.exports = userCon