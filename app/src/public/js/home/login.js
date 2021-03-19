"use strict";

//input id: #
const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    loginbutt = document.querySelector("button");

loginbutt.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        pw: pw.value,
    };

    console.log(req);
}
