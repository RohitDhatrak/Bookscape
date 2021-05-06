function errorHandler(err, req, res) {
    console.error(err.stack);
    res.status(500).json({ message: "Something broke!!", errMessage: err });
}

module.exports = { errorHandler };
