const Event = require('../models/eventModel') //import the model

// export a function called get all Events
exports.getAllEvents = (req , res) => {
  Event
  .find()
  .then(allEvents => {
      res.status(200).send(allEvents)
  })
  .catch(err => console.log(err))
}