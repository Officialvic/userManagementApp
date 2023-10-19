const express = require("express");
const router = express.Router();
const userController = require("../controllers/controller.js");

// GET route to return the list of users
router.get(
  "/users",
  userController.getUsers // Call the getUsers controller method
);

// POST route to add a new user
router.post(
  "/users",
  userController.addUser // Call the addUser controller method
);

module.exports = router;
