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
            const user = await UserStorage.getUsersInfo(client.id);

            if(user){
                if( user.id === client.id && user.pw === client.pw){
                    return {success: true};
                }
                return {success: false, msg: "pw error"};
            }
            return {success: false, msg: "id error"};
        }
        catch(err) {
            return { success: false, err };
        }
    }


    async register(){
        const client = this.body;
        try{
            const responce = await UserStorage.save(client);
            return responce;
        }
        catch(err) {
            return { success: false, err };
        }
    }
}

module.exports = User;