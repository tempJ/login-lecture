"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage")

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const body = this.body;
        const {id, pw} = UserStorage.getUsersInfo(body.id);

        if(id){
            if( id === body.id && pw === body.pw){
                return {success: true, msp: "login success"};
            }
            return {success: false, msg: "pw error"};
        }
        return {success: false, msg: "id error"};
    }

    register(){
        const client = this.body;
        const responce = UserStorage.save(client);

        return responce;
    }
}

module.exports = User;