let a = prompt("enter a number:");
//  intially prompt takes input as string
console.log(typeof a);
let latest = Number(a);
//  after this step we convert the string to number
console.log( typeof latest);
let newlatest = String(latest);
//  after this step we again change number to a string
console.log(typeof newlatest);