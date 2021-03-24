"use strict";

//module
const express = require("express");
const bparser = require("body-parser");
const dotenv = require("dotenv");

const app  = express();
dotenv.config();

//router
const home = require("./src/routes/home");

//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bparser.json());
//url을 통해 전달하는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문서 해결
app.use(bparser.urlencoded({extended: true}));

app.use("/", home); //use: middle ware 등록 method

module.exports = app;

// app: project folder
// app.js: main file
// src: source code folder
// .env: 환경 변수 file
// routes: controler에 해당하는 부분 뺌
// views: front-end folder
// public: front에 있는 코드를 js로 제어하고 css로 처리하는 folder
// config: code를 개발하기 위해서 필요한 설정들을 moule로 관리하는 폴더
// log: log 저장