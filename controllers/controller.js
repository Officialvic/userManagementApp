const usersData = require("../models/users.json");

// Controller method to get the list of users
const getUsers = (req, res) => {
  // To test proper error handling
  // throw new Error("Error occurred while fetching users");

  res.json(usersData.users); // Respond with the list of users in JSON format
};

// Controller method to add a new user
const addUser = (req, res) => {
  const { name, email, gender } = req.body; // Extract name and email from the request body

  // Validate the new user data

  const newUser = {
    id: usersData.users.length + 1,
    name,
    email,
    gender,
  };

  usersData.users.push(newUser);

  res.json({ message: "User added successfully" });
};

module.exports = {
  getUsers,
  addUser,
};
