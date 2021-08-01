const mongoose = require("mongoose");
const { Schema } = mongoose;

const WishListSchema = Schema(
    {
        createdAt: Number,
        updatedAt: Number,
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "The user id is required"],
            unique: true,
        },
        wishList: [
            {
                _id: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const WishList = mongoose.model("WishList", WishListSchema);

module.exports = { WishList };
