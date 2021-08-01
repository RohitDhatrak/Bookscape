const express = require("express");
const { extend } = require("lodash");
const router = express.Router();
const { WishList } = require("../models/wishlist.model");

router.param("userId", async (req, res, next, userId) => {
    try {
        const wishList = await WishList.findOne({ userId });
        if (!wishList) {
            return res.status(400).json({ message: "WishList not found" });
        }
        req.wishList = wishList;
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
        let wishList = req.wishList;
        wishList = await wishList.populate("wishList._id").execPopulate();
        const normalizedWishList = wishList.wishList.map(
            (item) => item._id._doc
        );
        res.status(200).json({
            wishList: normalizedWishList,
        });
    })
    .post(async (req, res) => {
        try {
            let wishList = req.wishList;
            const { wishListUpdates } = req.body;
            wishList.wishList = [...wishList.wishList, wishListUpdates];
            await wishList.save();
            res.status(200).json({
                message: "Product added to wishlist",
                wishList: wishList.wishList,
            });
        } catch {
            res.status(400).json({
                message: "There was some issue while updating your WishList",
            });
        }
    })
    .delete((req, res) => {
        try {
            const { product } = req.body;
            let wishList = req.wishList;
            const productIndex = wishList.wishList.findIndex((wishListItem) => {
                return wishListItem._id == product._id;
            });
            if (productIndex !== -1) {
                wishList.wishList.splice(productIndex, 1);
                wishList.save();
                res.status(200).json({
                    message: "Product removed from wishlist",
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
