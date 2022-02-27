const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
const shortid = require("shortid");

const KEY_ID = process.env.RAZORPAY_KEY;
const KEY_SECRET = process.env.RAZORPAY_SECRET;

const instance = new Razorpay({
    key_id: KEY_ID,
    key_secret: KEY_SECRET,
});

router.route("/orders").post(async (req, res) => {
    try {
        const { total } = req.body;

        const paymentOptions = {
            amount: total * 100,
            currency: "INR",
            receipt: shortid.generate(),
        };

        const response = await instance.orders.create(paymentOptions);
        res.json({
            order_id: response.id,
            currency: response.currency,
            amount: response.amount,
            message: "Order created sucessfulyy..",
        });
    } catch (error) {
        res.status(400).json({
            message: "Could not create the order",
            error,
        });
    }
});

module.exports = router;
