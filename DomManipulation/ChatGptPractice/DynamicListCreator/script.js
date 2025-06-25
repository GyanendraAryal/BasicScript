const list = document.querySelector("#list1");
let btn=document.querySelector("#btn");
let btn1=document.querySelector("#btn1");
btn.addEventListener("click",()=>{
    let newItem = prompt("Enter your Item.");
    if(newItem){
        const li=document.createElement("li");
        li.textContent=newItem;
        list.appendChild(li);
    }
});
btn1.addEventListener("click",()=>{
    if(list.lastElementChild){
        list.removeChild(list.lastElementChild);
    }
});
