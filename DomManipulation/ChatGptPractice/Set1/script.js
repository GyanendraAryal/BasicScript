//Change Text of Title

let c=0;
let btn=document.getElementById("change-text-btn")
btn.addEventListener("click",()=>{
    if(c===0){
        document.getElementById("main-title").innerText="You've changed me!!";
        c=1;
    }else{
        document.getElementById("main-title").innerText="DOM Practice";
        c=0;
    }
})

//Toggle Dark Mode

    document.getElementById("toggle-mode-btn").addEventListener("click",()=>{
     document.body.classList.toggle("dark-mode");
})