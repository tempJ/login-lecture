"use strict";

const express = require("express");
const app  = express();
const port = 2048;

//router
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use("/", home); //use: middle ware 등록 method


module.exports = app;