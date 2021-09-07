const jwt = require("jsonwebtoken");

function signTokenAndSetCookie(userId, res) {
    const sevenDays = 7 * 24 * 3600000;
    const token = jwt.sign(
        {
            userId,
        },
        process.env.SECRET,
        { expiresIn: "7d" }
    );
    if (process.env.NODE_ENV === "development") {
        res.cookie("jwt", token, {
            maxAge: sevenDays,
        });
    } else {
        res.cookie("jwt", token, {
            maxAge: sevenDays,
            secure: true,
        });
    }
}

module.exports = { signTokenAndSetCookie };
