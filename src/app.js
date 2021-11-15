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
 const sayHello = (req, res) => {
    console.log(req.query);
    const name = req.query.name;
    const content = name ? `Hello, ${name}!` : "Hello!";
    res.send(content);
  };

app.use(morgan("dev"));
app.get("/hello", sayHello);

module.exports = app;