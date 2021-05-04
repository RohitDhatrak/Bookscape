const express = require("express");
const router = express.Router();
const { credentials } = require("../data");

router.route("/").post((req, res) => {
    const { username, password } = req.body;
    const user = credentials.find((user) => user.username === username);
    if (user) {
        const isPasswordCorrect = user.password === password;
        if (isPasswordCorrect) {
            res.status(200).json({
                message: "Logged in sucessfully",
                userId: user.userId,
            });
        } else {
            res.status(401).json({ message: "The password does not match" });
        }
    } else {
        res.status(401).json({ message: "This email is not registered" });
    }
});

module.exports = router;
