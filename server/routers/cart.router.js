const express = require("express");
const router = express.Router();
const { cart } = require("../data");

router
    .route("/:userId")
    .get((req, res) => {
        try {
            const { userId } = req.params;
            const { cart: userCart } = cart.find(
                (cart) => cart.userId === userId
            );
            res.status(200).json({ cart: userCart });
        } catch {
            res.status(401).json({
                message: "There was some issue while fetching your data",
            });
        }
    })
    .post((req, res) => {
        try {
            const { userId } = req.params;
            const { product } = req.body;
            if (!product.productId) {
                throw "Error";
            }
            const { cart: userCart } = cart.find(
                (cart) => cart.userId === userId
            );
            const productIndex = userCart.findIndex(
                (cartItem) => cartItem.productId === product.productId
            );
            if (productIndex !== -1) {
                userCart[productIndex].quantity = product.quantity;
                res.status(200).json({
                    message: "Updated product quantity",
                });
            } else {
                userCart.push(product);
                res.status(200).json({
                    message: "Product added to cart",
                });
            }
        } catch {
            res.status(401).json({
                message: "There was some issue while updating your data",
            });
        }
    })
    .delete((req, res) => {
        try {
            const { userId } = req.params;
            const { product } = req.body;
            const { cart: userCart } = cart.find(
                (cart) => cart.userId === userId
            );
            const productIndex = userCart.findIndex(
                (cartItem) => cartItem.productId === product.productId
            );
            if (productIndex !== -1) {
                userCart.splice(productIndex, 1);
                res.status(200).json({
                    message: "Product removed from cart",
                });
            } else {
                throw "Error";
            }
        } catch {
            res.status(401).json({
                message: "There was some issue while updating your data",
            });
        }
    });

module.exports = router;
