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

    static getUsersInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, pw, name]

        const userInfo = usersKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo){
        // const users = this.#users;
        // users.id.push(userInfo.id);
        // users.name.push(userInfo.name);
        // users.pw.push(userInfo.pw);

        return true;
    }
}

module.exports = UserStorage;