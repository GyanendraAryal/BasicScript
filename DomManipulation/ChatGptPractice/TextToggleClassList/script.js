let btn = document.querySelector(".btn");
let text = document.querySelector(".text");

btn.addEventListener("click", () => {
    text.classList.toggle("hide");

    if (text.classList.contains("hide")) {
        btn.innerText = "Show More";
    } else {
        btn.innerText = "Show Less";
    }
});
