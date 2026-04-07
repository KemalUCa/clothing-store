const express = require("express");
const router = express.Router();
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

module.exports = router;