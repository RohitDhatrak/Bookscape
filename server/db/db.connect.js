const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
const initializeDBConnection = async () => {
    try {
        const connection = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        if (connection) {
            console.log("Successfully connected to the database");
        }
    } catch (error) {
        console.error("Mongoose connection failed", error);
    }
};

module.exports = { initializeDBConnection };
