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
            unique: true,
        },
        cart: [
            {
                _id: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                },
                // quantity: {
                //     type: Number,
                //     required: [true, "The product quantity is required"],
                // },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = { Cart };
