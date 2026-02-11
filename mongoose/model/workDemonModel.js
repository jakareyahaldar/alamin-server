const mongoose = require("mongoose")

const workDemonSchema = mongoose.Schema({
    img: String, event: String, org: String
},{ timestamps: true})

const workDemonColl = mongoose.model("work_demon",workDemonSchema)

module.exports = workDemonColl