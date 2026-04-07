const mongoose = require("mongoose");
require("dotenv").config();

const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to MongoDB Atlas");
});

mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});

process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("Mongoose disconnected through app termination");
    process.exit(0);
});

module.exports = mongoose;