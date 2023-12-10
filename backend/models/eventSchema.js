const mongoose = require("mongoose");


/** -The Event model represents each event with a title, link, and a reference to the File model, which stores information about the uploaded image using GridFS.

	-The File model stores information about the uploaded image, such as filename and content type.
*/

// Create a mongoose schema for the events
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  // GridFS fileId for storing images
  image: {
    type: mongoose.Types.ObjectId,
    ref: "File",
    required: true,
  },
});

// Create a mongoose model for the events
const Event = mongoose.model("Event", eventSchema);

// Create a mongoose schema for storing file information using GridFS
const fileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
});

// Create a mongoose model for storing file information
const File = mongoose.model("File", fileSchema);

// Export the models
module.exports = {
  Event,
  File,
};
