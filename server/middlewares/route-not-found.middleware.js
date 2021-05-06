function routeNotFound(req, res) {
    res.status(404).json({
        message: "Route not found on server, please check",
    });
}

module.exports = { routeNotFound };
