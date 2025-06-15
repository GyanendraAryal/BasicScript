let btn = document.querySelector(".btn");
let c = 0;
btn.addEventListener("click", () => {
    if (c === 0) {
        btn.innerText = "Show Less";
        c = 1;
    }else{
        btn.innerText="Show More";
        c=0;
    }
})