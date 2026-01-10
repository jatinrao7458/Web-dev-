 let myself = prompt("enter your name :");
//  console.log(typeof myself)
 let marks = prompt("enter your marks:");
 let number = prompt("Enter your number:");
 let na =String(myself)
 let list = {
    "name": ""+na,
    "Marks": + marks,
    "Number": +number,
 };
 console.log(list)
//  if an error NaN apperars means not a number
// to solve this problem enter "" to make it store as string as mentioned in line 6 . intially it was showing as NaN for the same 
