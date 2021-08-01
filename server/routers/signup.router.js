const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const { User } = require("../models/user.model");
const { WishList } = require("../models/wishlist.model");
const { Cart } = require("../models/cart.model");

router.route("/").post(async (req, res) => {
    try {
        const { newUser } = req.body;
        const user = await User.findOne({ emailId: newUser.emailId }).exec();
        if (!user) {
            const newUserFromDB = new User(newUser);
            await newUserFromDB.save();
            const newCartFromDB = new Cart({ userId: newUserFromDB._id });
            await newCartFromDB.save();
            const newWishListFromDB = new WishList({
                userId: newUserFromDB._id,
            });
            await newWishListFromDB.save();
            res.status(200).json({
                userId: newUserFromDB._id,
                message: "Successfully registered",
            });
        } else {
            res.status(400).json({
                message: "This email is already registered",
            });
        }
    } catch (error) {
        res.status(400).json({
            message: "There was some error while creating your account",
        });
    }
});

module.exports = router;
