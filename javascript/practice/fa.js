let random = Math.random();

let a = prompt("Enter first number");
let c = prompt("Enter operation (+, -, *, /, **)"); 
let b = prompt("Enter second number");

let obj = {
    "+": "-",
    "-": "/",
    "/": "**",
    "*": "+",
    "**": "*"
};

// Convert input strings to numbers
a = Number(a);
b = Number(b);

if (random > 0.1) {
    // Show correct calculation
    alert(`The result of calculation is ${eval(`${a} ${c} ${b}`)}`);
    console.log(`The result of calculation is ${eval(`${a} ${c} ${b}`)}`);
    console.log(random)
} else {
    // Change the operator unexpectedly
    c = obj[c];
    alert(`The result of calculation is ${eval(`${a} ${c} ${b}`)}`);
}
