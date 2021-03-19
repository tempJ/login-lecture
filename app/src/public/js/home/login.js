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
    console.log(JSON.stringify(req));
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then(console.log)
        .then((res) => {
            if(res.success){
                location.href = "/";
            }
            else{
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.err("login error");
        });
}
