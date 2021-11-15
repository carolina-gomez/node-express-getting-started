/**
 * This file will be where you configure your
 * Express application
 */

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

const logging = (req,res,next) => {
    console.log("A request is being made!");
    next();
}

app.use(logging);
app.use(sayHello);

module.exports = app;