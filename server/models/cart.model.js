const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = Schema(
    {
        createdAt: Number,
        updatedAt: Number,
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "The user id is required"],
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = { Cart };
