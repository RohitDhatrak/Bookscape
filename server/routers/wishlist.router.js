const express = require("express");
const router = express.Router();
const { wishList } = require("../../data");

router
    .route("/:userId")
    .get((req, res) => {
        try {
            const { userId } = req.params;
            const { wishList: userWishList } = wishList.find(
                (wishList) => wishList.userId === userId
            );
            res.status(200).json({ wishList: userWishList });
        } catch {
            res.status(400).json({
                message: "There was some issue while fetching your data",
            });
        }
    })
    .post((req, res) => {
        try {
            const { userId } = req.params;
            const { product } = req.body;
            if (!product) {
                throw "Error";
            }
            const { wishList: userWishList } = wishList.find(
                (wishList) => wishList.userId === userId
            );
            userWishList.push(product);
            res.status(200).json({ message: "Product added to wishlist" });
        } catch {
            res.status(400).json({
                message: "There was some issue while updating your data",
            });
        }
    })
    .delete((req, res) => {
        try {
            const { userId } = req.params;
            const { product } = req.body;
            const { wishList: userWishList } = wishList.find(
                (wishList) => wishList.userId === userId
            );
            const productIndex = userWishList.findIndex(
                (wishListItem) => wishListItem.productId === product.productId
            );
            if (productIndex !== -1) {
                userWishList.splice(productIndex, 1);
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
