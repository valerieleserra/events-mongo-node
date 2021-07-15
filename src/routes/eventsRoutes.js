const express = require ('express') //import express
const router = express.Router() //express router function method

const eventsController = require('../controllers/eventController') //import events controller
router.get('/events',eventsController.getAllEvents)

module.exports = router //export all routes within the router