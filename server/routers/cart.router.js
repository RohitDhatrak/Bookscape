const express = require("express");
const router = express.Router();
const { Cart } = require("../models/cart.model");

router.param("userId", async (req, res, next, userId) => {
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(400).json({ message: "Cart not found" });
        }
        req.cart = cart;
        next();
    } catch (error) {
        res.status(400).json({
            message: "There was some problem while retriving your cart",
            error,
        });
    }
});

router
    .route("/:userId")
    .get(async (req, res) => {
        try {
            let cart = req.cart;
            cart = await cart.populate("products").execPopulate();
            res.status(200).json({ cart: cart.products });
        } catch (error) {
            res.status(400).json({
                message: "There was some problem while retriving your cart",
                error,
            });
        }
    })
    .post(async (req, res) => {
        try {
            let cart = req.cart;
            const { cartUpdates } = req.body;
            cart.products.push(cartUpdates);
            await cart.save();
            res.status(200).json({
                message: "Product added to cart",
                cart,
            });
        } catch (error) {
            res.status(400).json({
                message: "There was some issue while updating your data",
                error,
            });
        }
    })
    .delete(async (req, res) => {
        try {
            const { product, all } = req.body;
            let cart = req.cart;
            if (all) {
                cart.products = [];
                await cart.save();
                res.status(200).json({
                    message: "Cart cleared successfully",
                });
            } else {
                const productIndex = cart.products.findIndex(
                    (cartItem) => cartItem._id == product._id
                );
                if (productIndex !== -1) {
                    cart.products.splice(productIndex, 1);
                    await cart.save();
                    res.status(200).json({
                        message: "Product removed from cart",
                    });
                } else {
                    throw Error;
                }
            }
        } catch (error) {
            res.status(400).json({
                message: "There was some issue while updating your data",
                error,
            });
        }
    });

module.exports = router;
