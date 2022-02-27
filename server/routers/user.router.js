const express = require("express");
const router = express.Router();
const { User } = require("../models/user.model");

router.route("/:userId").get(async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findOne({ _id: userId });
        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({
            message: "There was some error while getting the user",
        });
    }
});

router.route("/address").post(async (req, res) => {
    try {
        const { address, city, pincode, state, userId } = req.body;
        const user = await User.findById(userId);
        user.address = address;
        user.city = city;
        user.pincode = pincode;
        user.state = state;
        await user.save();
        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({
            message: "There was some error while adding the address",
        });
    }
});

module.exports = router;
