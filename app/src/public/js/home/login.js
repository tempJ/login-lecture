"use strict";

//input id: #
const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        pw: pw.value,
    };

    if(!id.value) return alert("input ID");
    if(!pw.value) return alert("input Password");

    console.log(req);
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href = "/";
            }
            else{
                if(res.err) return alert(JSON.stringify(res.err));
                alert(JSON.stringify(res.msg));
            }
        })
        .catch((err) =>{
            console.error("login error");
        });
}
