//Importing modules
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const eventRouter = require("./routes/eventsRoutes");

//Initiate server app
const app = express();

//Server App MiddleWare
app.use(express.json());
app.use("/events", eventRouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
app.listen(process.env.PORT, () => {
  console.log("Connected to DB and listening on port: " + process.env.PORT);
});
})
.catch((error) => {
	console.log(error)
})


//Listening
