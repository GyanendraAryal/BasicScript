let countSize = document.querySelector("#countSize");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let txt = document.querySelector("h3");
let btn3 = document.querySelector("#btn3");
let count = 0;

btn1.addEventListener("click", ()=>{
    count+=parseInt(countSize.value);
    txt.innerHTML=`Counter: ${count}`;
})
btn2.addEventListener("click",()=>{
    count-=parseInt(countSize.value)
    txt.innerHTML=`Counter: ${count}`
})
btn3.addEventListener("click",()=>{
    count=0;
    txt.innerHTML=`Counter: ${count}`
})