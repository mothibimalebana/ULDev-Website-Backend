// Import Modules
const express = require("express");

//Create
const routes = express.Router();

// Routes
routes.post("/", (req, res) => {
  res.json({
    Message: "Create new event",
  });
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
