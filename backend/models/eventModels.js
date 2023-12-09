// Import modules
const mongoose = require("mongoose");

const Event = mongoose.model('Event', {
  title: String,
  link: String,
  image: { data: Buffer, contentType: String },
});

module.exports = Event;
