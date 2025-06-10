let c= 0;
document.getElementById("change-text-btn").addEventListener("click",()=>{
    if(c===0){
        document.getElementById("main-title").innerText="You changed me!!";
        c=1;
    } else{
        document.getElementById("main-title").innerText="DOM Practice";
        c=0;
    }
});