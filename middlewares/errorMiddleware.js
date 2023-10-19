const errorHandler = (err, req, res, next) => {
    console.error(err); // Log the error for debugging purposes

    const statusCode = err.statusCode || 500; // Set the status code of the response to the error's status code, or 500 if not available
    const message = err.message || "Internal Server Error"; // Set the error message, or a generic message if not available

    res.status(statusCode).json({ error: message }); // Respond with the error message in JSON format
};

module.exports = errorHandler;
