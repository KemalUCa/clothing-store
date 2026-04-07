require("dotenv").config();

const express = require("express");
const path = require("path");
require("./models/db");

const productRoutes = require("./routes/productRoutes");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", productRoutes);

// root test route
app.get("/", (req, res) => {
    res.send("Clothing Store API is running...");
});

module.exports = app;