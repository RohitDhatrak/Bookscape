const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
    {
        // author
        // seller
        // Review
        createdAt: Number,
        updatedAt: Number,
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        author: {
            type: [String],
            validate: (v) => Array.isArray(v) && v.length > 0,
        },
        description: {
            type: String,
            required: [true, "Description is required"],
        },
        cover: {
            type: String,
            required: [true, "Cover is required"],
        },
        genres: {
            type: [String],
            validate: (v) => Array.isArray(v) && v.length > 0,
        },
        quantity: {
            type: Number,
            required: [true, "Quantity is required"],
        },
        // seller: {
        //     type: String,
        //     required: [true, "Seller name is required"],
        // },
        price: {
            type: Number,
            required: [true, "Price is required"],
        },
        discountedPrice: Number,
        discountPercentage: Number,
        fastDelivery: Boolean,
        salesCount: Number,
        avgRating: {
            type: Number,
            min: [0, "Rating cannot be lower than 0"],
            max: [5, "Rating cannot be greater than 5"],
        },
        // customerReviews: ,
        offers: Array,
        dateAdded: Number,
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
