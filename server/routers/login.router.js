const express = require("express");
const router = express.Router();
const { User } = require("../models/user.model");
const { signTokenAndSetCookie } = require("../utils/signTokenAndSetCookie");

router.route("/").post(async (req, res) => {
    try {
        const { password, emailId } = req.body;
        const user = await User.login(emailId, password);
        if (user === 404) {
            throw "User not found";
        } else if (user === 401) {
            throw "The password is incorrect";
        } else {
            const jwt = signTokenAndSetCookie(user._id);
            res.status(200).json({
                userId: user._id,
                user,
                message: "Logged in successfully",
                jwt,
            });
        }
    } catch (error) {
        res.status(401).json({
            message:
                error.trim() || "There was some error while authentication",
        });
    }
});

module.exports = router;
