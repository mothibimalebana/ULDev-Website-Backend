// Import Modules
const express = require("express");
const dotenv = require("dotenv").config();
const eventRoutes = require("./routes/eventRoutes");
const mongoose = require("mongoose");


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
