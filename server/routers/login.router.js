const express = require("express");
const router = express.Router();
const { User } = require("../models/user.model");

router.route("/").post(async (req, res) => {
    try {
        const { password, emailId } = req.body;
        const user = await User.findOne({ emailId }).exec();
        if (user) {
            const isPasswordCorrect = user.password === password;
            if (isPasswordCorrect) {
                res.status(200).json({
                    message: "Logged in sucessfully",
                    userId: user._id,
                    name: user.name,
                });
            } else {
                res.status(401).json({
                    message: "The password does not match",
                });
            }
        } else {
            res.status(401).json({ message: "This email is not registered" });
        }
    } catch {
        res.status(400).json({
            message: "There was some error while authentication",
        });
    }
});

module.exports = router;
