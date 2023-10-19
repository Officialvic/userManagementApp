const express = require("express");
const userRoutes = require("./routes/routes");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();
const port = 3000;

// Parse JSON request bodies
app.use(express.json());

// Mount userRoutes as middleware
app.use("/api", userRoutes);

// Error handling middleware
app.use(errorHandler);

// Start-Run server(nodemon app.js)
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
