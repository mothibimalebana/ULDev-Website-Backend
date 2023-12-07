// Import Modules
const express = require("express");
const dotenv = require("dotenv").config();
const eventRoutes = require("./routes/eventRoutes");

// Run express app
const app = express();

// Middleware
app.use(express.json());
app.use("/events", eventRoutes);

//Set up Port
app.listen(process.env.PORT, () => {
  console.log("Listening on Port:" + process.env.PORT);
});
