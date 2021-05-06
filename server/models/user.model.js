const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = Schema(
    {
        createdAt: Number,
        updatedAt: Number,
        name: {
            type: String,
            required: [true, "User's name is required"],
        },
        emailId: {
            type: String,
            required: [true, "User's email-id is required"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "User's password is required"],
        },
        address: String,
        orders: Array,
        pastOrders: Array,
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = { User };
