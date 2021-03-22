"use strict";

//input id: #
const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    pw = document.querySelector("#pw"),
    confirmPw = document.querySelector("#confirm-pw"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    if(!id.value) return alert("input ID");
    if(!pw.value) return alert("input Password");
    if(pw.value !== confirmPw.value) return alert("pw != confirm pw");

    const req = {
        id: id.value,
        pw: pw.value,
        name: name.value,
    };

    console.log(req);
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(req);
            if(res.success){
                console.log(req);
                location.href = "/login";
            }
            else{
                alert(res.msg);
            }
        })
        .catch((err) =>{
            console.error("register error");
        });
}
