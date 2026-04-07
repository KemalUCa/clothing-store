// load environment variables
require("dotenv").config();

// import required modules
const express = require("express");
const path = require("path");
require("./models/db"); // connect to MongoDB

// import routes
const productRoutes = require("./routes/productRoutes");

// create express app
const app = express();

// parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// register routes
app.use("/", productRoutes);

// root endpoint for basic check
app.get("/", (req, res) => {
    res.send("Clothing Store API is running...");
});

// export app
module.exports = app;