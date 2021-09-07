const { verifyToken } = require("../utils/verifyToken");

function auth(req, res, next) {
    const token = req.headers.authorization;
    if (token && verifyToken(token)) {
        next();
    } else {
        res.status(401).json({ message: "Token expired." });
    }
}

module.exports = { auth };
