const express = require("express");
const router = express.Router();
const { Product } = require("../models/product.model");

router.route("/").get(async (req, res) => {
    try {
        const productsData = await Product.find({});
        res.status(200).json({ productsData });
    } catch (error) {
        res.status(400).json({ message: "Could not fetch the products data" });
    }
});

router.route("/:id").get((req, res) => {
    const { id } = req.params;
    const product = productsData.find((product) => product.id === id);
    res.status(200).json({ product });
});

module.exports = router;
