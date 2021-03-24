"use strict";

const User = require("../../models/user");
// const UserStorage = require("../../models/UserStorage");
const logger = require("../../config/logger");

// HTTP 상태코드 MDN 참고
// render는 상태코드 자체 제공
const output = {
    home: (req, res) =>{
        logger.info(`GET / 200 "home"`);
        res.render("home/index");
    },
    login: (req, res) =>{
        logger.info(`GET /login 200 "sign in"`);
        res.render("home/login");
    },
    register: (req, res) =>{
        logger.info(`GET /register 200 "sign up"`);
        res.render("home/register");
    },
};

// 상태코드
// 200: 정상응답
// 300: 페이지 이동
// 400: client에서 실수했을 때 server 응답
// 500: server 실수
const process = {
    login: async (req, res) =>{
        const user = new User(req.body);
        const response = await user.login();
        const url = {
            method: "POST",
            path: "/login",
            status: response.err ? 400 : 200,
        };

        log(response, url);
        return res.status(url.status).json(response);
    },

    register: async (req, res) =>{
        const user = new User(req.body);
        const response = await user.register();
        const url = {
            method: "POST",
            path: "/register",
            status: response.err ? 400 : 201,//새로운 데이터가 생성되는 거라 201
        };

        log(response, url);
        return res.status(url.status).json(response);
    },
};

module.exports = {
    output,
    process,
};

const log = (response, url) =>{
    if(response.err)
        logger.error(`${url.method} ${url.path} ${url.status} res: ${response.success} ${response.err}`);
    else
        logger.info(`${url.method} ${url.path} ${url.status} res: ${response.success} ${response.msg || ""}`);
}