const express = require("express");
const router = express.Router();
const { User } = require("../models/user.model");
const { WishList } = require("../models/wishlist.model");
const { Cart } = require("../models/cart.model");
const { signTokenAndSetCookie } = require("../utils/signTokenAndSetCookie");

router.route("/").post(async (req, res) => {
    try {
        const { newUser } = req.body;
        const user = await User.findOne({ emailId: newUser.emailId }).exec();
        if (!user) {
            const newUserFromDB = new User(newUser);
            const newCartFromDB = new Cart({ userId: newUserFromDB._id });
            const newWishListFromDB = new WishList({
                userId: newUserFromDB._id,
            });
            await Promise.all([
                newUserFromDB.save(),
                newCartFromDB.save(),
                newWishListFromDB.save(),
            ]);
            const jwt = signTokenAndSetCookie(newUserFromDB._id);
            res.status(200).json({
                userId: newUserFromDB._id,
                user,
                message: "Successfully registered",
                jwt,
            });
        } else {
            res.status(400).json({
                message: "This email is already registered",
            });
        }
    } catch (error) {
        res.status(400).json({
            message: "There was some error while creating your account",
            error,
        });
    }
});

module.exports = router;
