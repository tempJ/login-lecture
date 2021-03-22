"use strict";

const User = require("../../models/user");
const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) =>{
        res.render("home/index");
    },
    login: (req, res) =>{
        res.render("home/login");
    },
};

const process = {
    login: (req, res) =>{
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
        // console.log(req);
        // console.log(req.body.id);
        // const id = req.body.id,
        //     pw = req.body.pw;
        
        // // new userStorage = new UserStorage();
        // const users = UserStorage.getUsers("id", "pw");
        // const response = {};
        // if(users.id.includes(id)){
        //      const idx = users.id.indexOf(id);
        //      if(users.pw[idx] === pw){
        //          response.success = true;
        //          return res.json(response);
        //      }
        // }

        // response.success = false;
        // response.msg = "login flase"
        // return res.json(response);
    },
};

module.exports = {
    output,
    process,
};