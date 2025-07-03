let btn = document.querySelector("#btn");
let bdy = document.querySelector("body");
let txt = document.querySelector(".txt");
let para = document.querySelector("p");
btn.addEventListener("click", () => {
    if (bdy.classList.contains("dark-mode")) {
        bdy.classList.remove("dark-mode");
        txt.style.backgroundColor = "white";
        para.style.color = "black";
        btn.innerHTML = "DarkMode";
    }
    else {
        bdy.classList.add("dark-mode");
        txt.style.backgroundColor = "yellow";
        para.style.Color = "black";
        btn.innerHTML = "LightMode"
    }
})