const mongoose = require('mongoose')

const ExperienceSchema = new mongoose.Schema({
    organization: {
        type:String,
        required: true,
    },
    role: {
        type:String,
        required: true,
    },
    duration: {
        type:String,
        required: true,
    }

})

const Experience = mongoose.model("Experience",ExperienceSchema);
module.exports = Experience;