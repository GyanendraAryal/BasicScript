let username=document.querySelector("#username");
let password = document.querySelector("#sec");
let mail = document.querySelector("#mail");
let btn=document.querySelector("#btn");
let btn1=document.querySelector("#btn1");
let result=document.querySelector("h3");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(username.value.trim()!==""&&password.value.length>=8){
        result.innerHTML="You're a valid user!!"
        result.style.color = "green";
    } else{
        result.innerHTML="You're not a valid user!!"
        result.style.color = "red";
    }
});
btn1.addEventListener("click",(e)=>{
    e.preventDefault();
    result.innerHTML="";
    username.value="";
    password.value="";
    mail.value="";
})