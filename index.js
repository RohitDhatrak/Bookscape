const express = require("express");
const cors = require("cors");
const products = require("./server/routers/products.router");
const login = require("./server/routers/login.router");
const signup = require("./server/routers/signup.router");
const cart = require("./server/routers/cart.router");
const wishList = require("./server/routers/wishlist.router");
const {
    routeNotFound,
} = require("./server/middlewares/route-not-found.middleware");
const {
    errorHandler,
} = require("./server/middlewares/error-handler.middleware");
const { initializeDBConnection } = require("./server/db/db.connect");

const port = 4444;
const whitelist = [
    "https://development--store-bookscape.netlify.app",
    "https://store-bookscape.netlify.app",
];
const corsOptions = {
    origin: whitelist,
    optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
if (process.env.DEV) {
    app.use(cors());
} else {
    app.use(cors(corsOptions));
}

initializeDBConnection();

// const { modifiedData } = require("./dataModelling");
// const { Product } = require("./server/models/product.model");

// modifiedData.map(async (product) => {
//     const newProduct = new Product(product);
//     await newProduct.save();
// });

app.use("/products", products);
app.use("/login", login);
app.use("/signup", signup);
app.use("/cart", cart);
app.use("/wishlist", wishList);

app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log("server started on port " + port);
});
