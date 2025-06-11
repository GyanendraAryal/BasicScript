let pass = document.getElementById("pass");
let btn = document.getElementById("btn");
function showPassword() {
    if (btn.innerText == "Show") {
        pass.type = "text";
        btn.innerText = "Hide"
        document.body.style.backgroundColor="grey";
    } else {
        pass.type = "password";
        btn.innerText = "Show";
        document.body.style.backgroundColor="green";
    }
}