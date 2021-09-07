const express = require("express");
const router = express.Router();
const { Product } = require("../models/product.model");

router.route("/").get(async (req, res) => {
    try {
        const productsData = await Product.find({});
        res.status(200).json({ productsData });
    } catch (error) {
        res.status(400).json({
            message: "Could not get the products data",
            error,
        });
    }
});

router.route("/:id").get((req, res) => {
    try {
        const { id } = req.params;
        const product = productsData.find((product) => product.id === id);
        res.status(200).json({ product });
    } catch (error) {
        res.status(400).json({
            message: "Could not get the product data",
            error,
        });
    }
});

module.exports = router;
