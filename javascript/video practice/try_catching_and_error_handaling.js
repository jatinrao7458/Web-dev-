//  parseint  help to convert to integer 
let a = parseInt(prompt("Enter a number"))
let b = parseInt(prompt("Enter a second number"))
let sum =a+b
// the code in line 6 an d7 makes anew error made by me when sum is not a number
if(isNaN(sum)){
    throw SyntaxError("This is not allowed")
}
console.log("The sum is",sum)
// the below code in line 11 is giving and error and i dont want it to throew any error
console.log("The sum is",sum*x)