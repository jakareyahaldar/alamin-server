const mongoose = require("mongoose")

const expertiesSchema = mongoose.Schema({
    icon: String,
    iconBg: String,
    title: String,
    description: String
}, { timestamps: true })

const ExpertiesColl = mongoose.model("experties", expertiesSchema)

module.exports = ExpertiesColl