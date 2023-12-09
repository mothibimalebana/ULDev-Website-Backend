// Import Modules
const express = require("express");
const dotenv = require("dotenv").config();
const eventRoutes = require("./routes/eventRoutes");
const mongoose = require("mongoose");
const multer = require("multer");
const Grid = require("gridfs-stream");
const path = require("path");

// Run express app
const app = express();

// Middleware
app.use(express.json());
app.use("/events", eventRoutes);

mongoose
  .connect(process.env.MongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //Set up Port
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB and Listening on Port:" + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const conn = mongoose.connection;

let gfs;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Multer configuration for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });