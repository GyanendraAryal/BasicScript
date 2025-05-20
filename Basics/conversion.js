//Implicit Conversion
/*let a = true
let b = 5
let n = "5"
console.log(a+b);
console.log("10"/5);
console.log("60"*2);
console.log(n*b);
console.log(b+n);
console.log("5" + 2);//52
console.log("5" - 2);//3
console.log(true + false);//1
console.log(null + 1);//1
console.log(undefined + 1);//NaN
console.log([ ] + 1);//1
console.log([1] + 1);//11
console.log({ } + 1);//[object object]1
console.log(Number("123abc"));//NaN
console.log(Boolean("false"));//True(Because it's non empty string)

//Explicit Conversion
let n = "42"
let m = parseInt(n);
console.log(typeof(m),m);//Number 42

let a = 0
let b = Boolean(a);
console.log(typeof(b),b);//Boolean false

let ans = false;
let p = parseInt(false);
console.log(typeof(p),p);//Number NaN

let s = 10;
let t = s.toString();
console.log(typeof(t),t);//String 10

let d = [1,2]
let e = d.toString();
console.log(typeof(e),e);//String 1,2

let f = null;
let g = Boolean(f);
console.log(typeof(g),g);//Boolean false

let h = "";
let i = parseInt(h);
console.log(typeof(i),i);//Number NaN

let k = { };
let l = k.toString();
console.log(typeof(l),l);//String[object object]*/




//Practice set 3 Fix the Bugs
// 1. User enters age
/*let userAge = prompt("Enter age:");
// Check if user is adult (18+)
if (userAge >= 18) {
  alert("Adult");
} else {
  alert("Minor");
}

// 2. Local storage handling
let data = { name: "Sam" };
localStorage.setItem("data", data); // what's wrong?

// 3. API response
let isActive = "true";
if (isActive) {
  console.log("User is active");
}*/
//Answer
// 1. User enters age
/*let userAge = prompt("Enter age:");
userAge = Number(userAge); // explicit conversion

// Check if user is adult (18+)
if (isNaN(userAge)) {
    alert("Please enter a valid number!");
} else if (userAge >= 18) {
    alert("Adult");
} else {
    alert("Minor");
}*/