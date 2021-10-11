const mongoose = require("mongoose");
const { Schema } = mongoose;
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

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
            validate: [isEmail, "Please enter a valid email address"],
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

UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.statics.login = async function (emailId, password) {
    const user = await this.findOne({ emailId }).exec();
    if (user) {
        const doesMatch = await bcrypt.compare(password, user.password);
        if (doesMatch) {
            return user;
        }
        return 401;
    } else {
        return 404;
    }
};

const User = mongoose.model("User", UserSchema);

module.exports = { User };
