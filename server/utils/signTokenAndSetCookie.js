const jwt = require("jsonwebtoken");

function signTokenAndSetCookie(userId) {
    return jwt.sign(
        {
            userId,
        },
        process.env.SECRET,
        { expiresIn: "7d" }
    );
}

module.exports = { signTokenAndSetCookie };
