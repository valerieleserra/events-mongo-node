const express = require('express') //import express // pulls from noode modules
const cors = require('cors') // " cors // "
const mongoose = require('mongoose') // " mongoose
require('dotenv/config') //importing dotenv library to use variable

const app = express() // creating app as express
app.use(express.json()) // use express and parse everything into json

//connect to mongoose
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true , useUnifiedTopology: true})
        .then(() => {
            app.listen(5000)
            console.log('App is listening on 5000 and connected to Mongo')
        })
        .catch(err => console.log(err))


// import the router
const eventsRoutes = require('./src/routes/eventsRoutes')
app.use(eventsRoutes)



// const newEvent = {
//     title: 'Boca Beach Clean Up',
//     date: '2021-08-02',
//     description: 'Beach clean up',
//     cost: 'Free',
//     attendees: ['Mia','Matt','Val','Emily','Chris']
// }

// function createEvent(){
//  new Event(newEvent)
//     .save()
//     .then(() => console.log('event saved'))
//     .catch(err => console.log(err))
// }
    
// app.get('/' , (req,res) => {
// createEvent()
// res.send('event created')
// })