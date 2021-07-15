const express = require('express') //import express // pulls from noode modules
const cors = require('cors') // " cors // "
const mongoose = require('mongoose') // " mongoose
require('dotenv/config') //importing dotenv library to use variable

const app = express() // creating app as express
app.use(express.json()) // use express and parse everything into json

//connect to mongoose
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true , useUnifiedTopology: true})
        .then( () => console.log('connected to mongo'))
        .catch(err => console.log(err))


app.listen(5000,( req, res ) => {console.log('Listening on port 5000')
})