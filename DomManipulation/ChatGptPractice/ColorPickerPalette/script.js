const input = document.querySelector("#take");
const main = document.querySelector(".main");

input.addEventListener("input", e =>{
    main.style.backgroundColor=e.target.value;
})