"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage")

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;

        try{
            const {id, pw} = await UserStorage.getUsersInfo(client.id);

            if(id){
                if( id === client.id && pw === client.pw){
                    return {success: true, msg: "login success"};
                }
                return {success: false, msg: "pw error"};
            }
            return {success: false, msg: "id error"};
        }
        catch(err) {
            return { sucess: false, err };
        }
    }


    async register(){
        const client = this.body;
        try{
            const responce = await UserStorage.save(client);
            return responce;
        }
        catch(err) {
            return { sucess: false, err };
        }
    }
}

module.exports = User;