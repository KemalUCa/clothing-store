// import mongoose for MongoDB connection
const mongoose = require("mongoose");
// load environment variables from .env
require("dotenv").config(); 

// MongoDB connection string
const dbURI = process.env.MONGO_URI; 

// connect to MongoDB
mongoose.connect(dbURI); 

// connection successful
mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to MongoDB Atlas");
});

// connection error
mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error: " + err);
});

// connection disconnected
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});

// close connection when app is terminated
process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("Mongoose disconnected through app termination");
    process.exit(0);
});

// export mongoose instance
module.exports = mongoose; 