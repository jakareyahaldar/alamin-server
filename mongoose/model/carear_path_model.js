const mongoose = require("mongoose")

const carear_path_schema = mongoose.Schema({
    points: [String],
    organization: String,
    date: String,
    role: String
},{ timestamps: true})

const CarearColl = mongoose.model("carear_path",carear_path_schema)

module.exports = CarearColl