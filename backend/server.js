//Importing modules
const express = require("express");
const dotenv = require("dotenv").config();

//Initiate server app
const app = express();

//Listening
app.listen(process.env.PORT, () => {
  console.log("Listening on port: " + process.env.PORT);
});
