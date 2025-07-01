let txt = document.getElementById("ans");
let btn = document.getElementById("btn");
let items = document.getElementById("items");
btn.addEventListener("click", () => {
    const newValue = txt.value.trim();
    if (!newValue) return;
    const li = document.createElement("li")
    li.innerText = newValue;
    items.appendChild(li);
    txt.value = "";
});