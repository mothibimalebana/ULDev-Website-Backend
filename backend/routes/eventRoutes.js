// Import Modules
const express = require("express");


//Create
const routes = express.Router();

// Routes
routes.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, link } = req.body;
    const image = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };

    const event = new Event({ title, link, image });
    await event.save();

    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

routes.get("/", (req, res) => {
  res.json({
    Message: "Retrieve all events",
  });
});

routes.get("/:id", (req, res) => {
  res.json({
    Message: "Retrieve specific event",
  });
});

routes.put("/:id", (req, res) => {
  res.json({
    Message: "update existing event",
  });
});

routes.delete("/:id", (req, res) => {
  res.json({
    Message: "Delete an event",
  });
});

module.exports = routes;
