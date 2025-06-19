const txt = document.querySelector("#txt");
const charcount=document.querySelector("#char-count");
txt.addEventListener('input',()=>{
    const count=txt.value.length;
    charcount.innerText=`Character ${count}`;
    if(count>100){
        document.body.style.backgroundColor="red";
        charcount.innerText= `Warning!! You exceeded your limits!! ${count}`;
    }else{
        document.body.style.backgroundColor="white";
    }
})