// import mongoose for MongoDB connection
const mongoose = require("mongoose");

// define schema for product
const productSchema = new mongoose.Schema({
    storeId: {
        type: Number,
        required: true
    },
    storeName: {
        type: String,
        required: true
    },
    productId: {
        type: Number,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// create model
const Product = mongoose.model("Product", productSchema);

// export model
module.exports = Product;