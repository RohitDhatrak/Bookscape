const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const products = require("./server/routers/products.router");
const login = require("./server/routers/login.router");
const signup = require("./server/routers/signup.router");
const cart = require("./server/routers/cart.router");
const wishList = require("./server/routers/wishlist.router");

const port = 4444;
const corsOptions = {
    origin: "",
    optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors());

app.use("/products", products);
app.use("/login", login);
app.use("/signup", signup);
app.use("/cart", cart);
app.use("/wishlist", wishList);

app.listen(port, () => {
    console.log("server started at " + port);
});
