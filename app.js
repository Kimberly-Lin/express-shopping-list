"use strict";

const express = require("express");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const routes = require("./router")

//prefix route url with /items
app.use("/items", routes);

module.exports = app;