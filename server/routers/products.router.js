const express = require("express");
const router = express.Router();
const { productsData } = require("../data");

router.route("/").get((req, res) => {
    res.status(200).json({ productsData });
});

router.route("/:id").get((req, res) => {
    const { id } = req.params;
    const product = productsData.find((product) => product.id === id);
    res.status(200).json({ product });
});

module.exports = router;
