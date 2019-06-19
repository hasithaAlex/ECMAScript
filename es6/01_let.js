let a = 50;
let b = 100;
if (true) {
 let a = 60;
 var c = 10;
 console.log(a); // 60
 console.log(b); // 100
}
console.log(c); // 10
console.log(a); // 50

function init() {
    console.log(a); // 50
    console.log(b); // 100
}

init();