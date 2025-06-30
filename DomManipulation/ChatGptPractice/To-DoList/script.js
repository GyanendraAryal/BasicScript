let txt=document.getElementById("input");
let btn=document.getElementById("btn");
let items=document.getElementById("items");
btn.addEventListener("click",()=>{
    const newvalue=txt.value;
    if(newvalue){
        let li=document.createElement("li")
        li.innerContent=newvalue;
        items.appendChild(li);
        txt.value="";
    }
})