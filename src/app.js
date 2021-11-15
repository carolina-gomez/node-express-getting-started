/**
 * This file will be where you configure your
 * Express application
 */

const express = require("express");
const app = express();

/**
 * Middleware
 * A  function that an Express server runs between
 * receiving a request and responding to that request.
 */
const sayHello = (req, res, next) => {
    res.send("Hello");
}

module.exports = app;