//Import Modules
const express = require("express");
const upload = require("../middleware/eventMiddleware");
const eventModel = require("../models/eventSchema");

//Initiate router
const router = express.Router();

//Routes
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, link } = req.body;
    const image = req.file.path;

    const newEvent = new Event({
      title,
      link,
      image,
    });

    const savedEvent = await newEvent.save();
    res.json(savedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/", (req, res) => {
  res.json({
    message: "view all events",
  });
});
router.get("/:id", (req, res) => {
  res.json({
    message: "view an event",
  });
});
router.put("/:id", (req, res) => {
  res.json({
    message: "Edit an event",
  });
});
router.delete("/:id", (req, res) => {
  res.json({
    message: "Delete an event",
  });
});

module.exports = router;
