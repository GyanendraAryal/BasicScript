let txt = document.getElementById("ans");
let btn = document.getElementById("btn");
let items = document.getElementById("items");
let btn1=document.querySelector("#btn1");
let li = document.querySelector("li");
btn.addEventListener("click", () => {
    const newValue = txt.value.trim();
    if (!newValue) return;
    const li = document.createElement("li")
    li.addEventListener("click",()=>{
    li.classList.toggle("checked");
})
    li.innerText = newValue;
    items.appendChild(li);
    txt.value = "";
});
btn1.addEventListener("click",()=>{
    if(items.lastElementChild){
        items.removeChild(items.lastElementChild);
    }
    txt.value="";
});