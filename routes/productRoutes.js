// import express and create router
const express = require("express");
// import product controller for handling requests
const router = express.Router();
// import product controller for handling requests
const productController = require("../controllers/productController");

// CREATE
router.post("/products", productController.createProduct);

// READ ALL
router.get("/products", productController.getAllProducts);

// READ ONE
router.get("/products/:id", productController.getProductById);

// UPDATE
router.put("/products/:id", productController.updateProduct);

// DELETE
router.delete("/products/:id", productController.deleteProduct);

// INTEGRATION 
router.get("/all-products", productController.getAllGroupProducts);

// export router
module.exports = router;