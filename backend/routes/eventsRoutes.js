//Import Modules
const express = require("express");

//Initiate router
const router = express.Router();

//Routes
router.post("/", (req, res) => {
  res.json({
    message: "create an event",
  });
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
