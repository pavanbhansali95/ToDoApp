const express = require("express");
const protectedRoute = express.Router();
const config = require('../config/config');
const Response = require("../../response");
protectedRoute.use((req, res, next) => {
    const token = req.headers['access-token'];
    let response = new Response();
    if (token) {
        jwt.verify(token, config.secretKey, (err, decoded) => {
            if (err) {
                response.status.statusCode = 401;
                response.status.message = "Invalid token";
                res.status(401).send(response);
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {
        response.status.statusCode = 401;
        response.status.message = "No Token Provided.";
        res.status(401).send(response);
    }
});
module.exports = protectedRoute;