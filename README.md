User Management API
Run server on port:300
http://localhost:3000/api/users

This project implements a simple User Management API using Express, following the MVC (Model-View-Controller) architectural pattern. The API allows you to retrieve a list of users, as well as add new users to the system.

Requirements
Node.js (version 12 or above)
npm (Node Package Manager)
express js (framework)

Installation
Clone the repository or download the project files.

Navigate to the project directory in the terminal.

Run the following command to install the dependencies:

npm install
npm init
npm i express

Usage
Start the server by running the following command:

nodemon app.js

The API server will start running locally on port 3000.

You can interact with the API using a tool like curl, Postman, or a web browser.

API Endpoints
Get Users
Endpoint: GET /api/users
Description: Retrieves a list of all users.
Response: Returns an array of user objects in JSON format.

Add User
Endpoint: POST /api/users
Description: Adds a new user to the system.
Request Body: Requires a JSON object with the following properties:
name (string): The name of the user.
email (string): The email address of the user.
gender (string): The gender of the user.
Response: Returns a success message in JSON format.

Error Handling
If any errors occur during the API requests, an appropriate error response will be returned. The error response will include an error message and an HTTP status code indicating the type of error.

Project Structure
The project follows the MVC (Model-View-Controller) architectural pattern for better code organization and separation of concerns. The main directories and files are as follows:

app.js: The main entry point of the application.
controllers/controller.js: Contains the logic for handling user-related operations.
models/users.json: Holds the hardcoded user data.
routes/routes.js: Defines the API routes and maps them to the corresponding controller methods.
middlewares/errorMiddleware.js: Handles errors and returns appropriate error responses.
