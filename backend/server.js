// Import Modules
const express = require("express");
const dotenv = require("dotenv").config();
const eventRoutes = require("./routes/eventRoutes");
const mongoose = require("mongoose");
const multer = require("multer");
const { Event, File } = require("../backend/models/eventSchema");

// Run express app
const app = express();

// Middleware
app.use(express.json());
app.use("/events", eventRoutes);

//Connection to DB
mongoose
  .connect(process.env.MongoDB_URI)
  .then(() => {
    //Set up Port
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB and Listening on Port:" + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Set up Multer storage engine for GridFS
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = { storage, upload };
