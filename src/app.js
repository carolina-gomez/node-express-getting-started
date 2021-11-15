/**
 * This file will be where you configure your
 * Express application
 */

const morgan = require("morgan");
const express = require("express");
const app = express();
require

/**
 * Middleware
 * A  function that an Express server runs between
 * receiving a request and responding to that request.
 */
const sayHello = (req, res, next) => {
    res.send("Hello");
}

app.use(morgan("dev"));
app.use(sayHello);

module.exports = app;