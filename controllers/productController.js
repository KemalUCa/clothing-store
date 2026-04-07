const Product = require("../models/productModel");

// CREATE
exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product({
            storeId: req.body.storeId,
            storeName: req.body.storeName,
            productId: req.body.productId,
            productName: req.body.productName,
            price: req.body.price
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// READ ALL
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ ONE
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({ productId: req.params.id });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { productId: req.params.id },
            req.body,
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({
            productId: req.params.id
        });

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// INTEGRATION - GET all products from Group 7 stores
exports.getAllGroupProducts = async (req, res) => {
    try {
        // my products from MongoDB
        const myProducts = await Product.find();

        // my teammates' deployed links
        const farhaUrl = "https://farha-store-link.onrender.com/products";
        const aliUrl = "https://ali-store-link.onrender.com/products";

        let farhaProducts = [];
        let aliProducts = [];

        // Farha products
        try {
            const farhaResponse = await fetch(farhaUrl);

            if (!farhaResponse.ok) {
                console.log(`Farha API error: ${farhaResponse.status}`);
            } else {
                farhaProducts = await farhaResponse.json();
            }
        } catch (error) {
            console.log("Could not load Farha's products:", error.message);
        }

        // Ali products
        try {
            const aliResponse = await fetch(aliUrl);

            if (!aliResponse.ok) {
                console.log(`Ali API error: ${aliResponse.status}`);
            } else {
                aliProducts = await aliResponse.json();
            }
        } catch (error) {
            console.log("Could not load Ali's products:", error.message);
        }

        const allProducts = [
            ...myProducts,
            ...farhaProducts,
            ...aliProducts
        ];

        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};