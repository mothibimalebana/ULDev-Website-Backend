// Import Modules
const express = require("express");
const dotenv = require("dotenv").config();

// Run express app
const app = express();

//Set up Port
app.listen(process.env.PORT, () => {
  console.log("Listening on Port:" + process.env.PORT);
});
