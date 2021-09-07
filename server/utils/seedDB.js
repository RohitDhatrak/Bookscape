const { modifiedData } = require("../../dataModelling");
const { Product } = require("../models/product.model");

function seedDB() {
    modifiedData.map(async (product) => {
        const newProduct = new Product(product);
        await newProduct.save();
    });
}

module.exports = { seedDB };
