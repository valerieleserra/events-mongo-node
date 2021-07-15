const mongoose = require('mongoose') // import mongoose


const EventSchema = mongoose.Schema({ //schema/rules to control type of data//a function that takes in an object
    title: String,
    date: Date,
    description: String,
    cost: String,
    attendees: Array
})

module.exports = mongoose.model('Event', EventSchema)  //create model from schema


