const jwt = require("jsonwebtoken");

function verifyToken(token) {
    try {
        return jwt.verify(token, process.env.SECRET);
    } catch (e) {
        return false;
    }
}

module.exports = { verifyToken };
