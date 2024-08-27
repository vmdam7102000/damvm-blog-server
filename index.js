const express = require("express");
const cors = require("cors"); // <- add this if you're using CORS
const PostRouter = require("./routes/PostRouter"); // <- add this for the routes

const dbConnect = require("./db/dbConnect"); // <- add this

const app = express();

// Connect to the database
dbConnect(); // <- add this

// Middleware
app.use(cors()); // <- add this if you're using CORS
app.use(express.json()); // <- add this

// Routes
app.use("/api", PostRouter); // <- add this

// Start the server
app.listen(8080, () => {
  console.log("server listening on port 8080");
});