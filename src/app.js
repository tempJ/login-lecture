"use strict";

const express = require("express");
const app  = express();
const port = 2048;

//router
const home = require("./routes/home");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use: middle ware 등록 method

module.exports = app;