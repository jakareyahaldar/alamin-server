const mongoose = require("mongoose")

const certificateSchema = mongoose.Schema({
    title: String,
    organization: String,
    icon_class: String,
    src: String,
},{ timestamps: true})

const CertificateColl = mongoose.model("certificate",certificateSchema)

module.exports = CertificateColl