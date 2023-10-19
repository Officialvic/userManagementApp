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
        id: usersData.users.length + 1, // Generate a new ID for the user
        name, // Set the name of the user
        email, // Set the email of the user
        gender, // Set the gender of the user
    };

    usersData.users.push(newUser); // Add the new user to the users array

    res.json({ message: "User added successfully" }); // Respond with a success message
};

module.exports = {
    getUsers, // Export the getUsers controller method
    addUser, // Export the addUser controller method
};
