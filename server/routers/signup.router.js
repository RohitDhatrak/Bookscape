const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const { credentials, cart, wishList } = require("../../data");

router.route("/").post((req, res) => {
    const { username, password } = req.body;
    const user = credentials.find((user) => user.username === username);
    if (!user) {
        const newUser = {
            userId: uuidv4(),
            username: username,
            password: password,
        };
        credentials.push(newUser);
        console.log(credentials);
        cart.push({ userId: newUser.userId });
        wishList.push({ userId: newUser.userId });
        res.status(200).json({
            userId: newUser.userId,
            message: "Successfully registered",
        });
    } else {
        res.status(401).json({ message: "This email is already registered" });
    }
});

module.exports = router;
