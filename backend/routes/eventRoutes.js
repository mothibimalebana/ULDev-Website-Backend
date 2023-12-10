// Import Modules
const express = require("express");
const multer = require("multer");
const { Event, File } = require("../models/eventSchema");
const { storage, upload } = require("../server");

//Create
const router = express.Router();

// Handle image upload
router.post("/events", upload.single('image'), async (req, res) => {
  try {
    // Create a new file record in the File model
    const file = new File({
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    // Save the file record
    await file.save();

    // Create a new event with the file reference
    const event = new Event({
      title: req.body.title,
      link: req.body.link,
      image: file._id,
    });

    // Save the event
    await event.save();

    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
