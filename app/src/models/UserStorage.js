"use strict";

class UserStorage{
    static #users = { //# 쓰면 public이 아닌 private 변수
        id: ["a", "b", "c"],
        pw: ["12", "123", "1234"],
        names: ["A", "B", "C"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;