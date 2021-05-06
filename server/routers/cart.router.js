const express = require("express");
const router = express.Router();
const { Cart } = require("../models/cart.model");

router.param("userId", async (req, res, next, userId) => {
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(400).json({ message: "WishList not found" });
        }
        req.cart = cart;
        next();
    } catch (error) {
        res.status(400).json({
            message: "There was some problem while retriving your WishList",
        });
    }
});

router
    .route("/:userId")
    .get(async (req, res) => {
        let cart = req.cart;
        cart = await cart.populate("cart._id").execPopulate();
        const normalizedCart = cart.cart.map((item) => item._id._doc);
        res.status(200).json({ cart: normalizedCart });
    })
    .post(async (req, res) => {
        try {
            let cart = req.cart;
            const { cartUpdates } = req.body;
            cart.cart = [...cart.cart, cartUpdates];
            // const productIndex = cart.cart.findIndex(
            //     (cartItem) => cartItem._id === product._id
            // );
            await cart.save();
            res.status(200).json({
                message: "Product added to cart",
                cart,
            });
        } catch {
            res.status(400).json({
                message: "There was some issue while updating your data",
            });
        }
    })
    .delete((req, res) => {
        try {
            const { product } = req.body;
            let cart = req.cart;
            const productIndex = cart.cart.findIndex((cartItem) => {
                return cartItem._id == product._id;
            });
            if (productIndex !== -1) {
                cart.cart.splice(productIndex, 1);
                cart.save();
                res.status(200).json({
                    message: "Product removed from cart",
                });
            } else {
                throw "Error";
            }
        } catch {
            res.status(400).json({
                message: "There was some issue while updating your data",
            });
        }
    });

module.exports = router;
