"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app  = express();
const port = 2048;

//router
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use("/", home); //use: middle ware 등록 method

app.use(bodyParser.json());
//url을 통해 전달하는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문서 해결
app.use(bodyParser.urlencoded({extended: true}));


module.exports = app;