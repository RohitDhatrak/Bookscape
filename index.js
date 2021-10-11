const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
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
// const { seedDB } = require("./server/utils/seedDB");
const { auth } = require("./server/middlewares/auth");

const port = 4444;
const whitelist = [
    "https://development--store-bookscape.netlify.app/",
    "https://store-bookscape.netlify.app/",
];
const corsOptions = {
    origin: whitelist,
    optionsSuccessStatus: 200,
    credentials: true,
};

const app = express();
app.use(express.json());
app.use(cookieParser());
if (process.env.NODE_ENV === "development") {
    app.use(cors({ origin: true, credentials: true }));
} else {
    app.use(cors(corsOptions));
}

initializeDBConnection();
// seedDB();

app.use("/products", products);
app.use("/login", login);
app.use("/signup", signup);
app.use(auth);
app.use("/cart", cart);
app.use("/wishlist", wishList);

app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log("server started on port " + port);
});
