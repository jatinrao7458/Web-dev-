let arr =[12,44,66,76,45]
//when we have to make a new array using the old array we use the map function 
//we have to make a new array which square of fisrt array

//using for loop
let len=arr.length
let newarr=[]
for(let i=0;i<len;i++){
let intaial=(arr[i]**2)
newarr.push(intaial)
}
console.log(newarr)

//using map function
let anotherarr=arr.map((e)=>{
    return e**2
})
console.log(anotherarr)
//map function acts on all the array elements (i.e its used on array) (like map function as a loop that itself iterate sit to  antother array element) 
// in thi sexample we made the function after using map we can also mak efunction intially and do it later (like if we have a function name "square" the the syntax would have been "let anotherarr=arr.map(square)")

//filter
//in this also we can first declare the function then perform filter 
//we will see both ways 
//by declaring a function intially
//using only short hand






let lessThanFifty1 = ((e)=>{ 
    if(e>50){
         return true; }
     else{
         return false } }) 




//the code in line  to line 7 is equal to the the code in line 47




let lessThanFifty = (e) => (e > 50 ? true : false);
// In JavaScript arrow functions, the use of curly braces {} depends on whether the function body consists of a single expression or multiple statements.



// When to use curly braces:
// For multiple statements: If the arrow function's body contains more than one statement, you must enclose them within curly braces. In this case, you also need to explicitly use the return keyword to return a value.

//     const calculateSum = (a, b) => {
//       const sum = a + b;
//       return sum;
//     };

// For side effects without returning a value: If the function's primary purpose is to perform side effects (like logging to the console, modifying external state, etc.) and it doesn't implicitly return a value, using curly braces makes this intent clear.

//     const logMessage = (message) => {
//       console.log(message);
//     };

// To return an object literal: If you want to implicitly return an object literal, you must wrap the object literal in parentheses () to avoid ambiguity with a code block. However, if you use curly braces for the function body, you would explicitly return the object.

//     // Implicit return of an object (requires parentheses)
//     const createPerson = (name, age) => ({ name: name, age: age });

//     // Explicit return of an object (with curly braces for the function body)
//     const createPersonExplicit = (name, age) => {
//       return { name: name, age: age };
//     };



// When not to use curly braces:
// For a single expression that is implicitly returned: If the arrow function's body consists of a single expression, you can omit the curly braces and the return keyword. The result of that expression will be implicitly returned.

//     const add = (a, b) => a + b;
let newarr2=arr.filter(lessThanFifty)
console.log(newarr2)

//by function inside the line
let newarr3=arr.filter((e)=>
    e >50 ? true:false
)
console.log(newarr3)

//reduce
let newarr_reduce=arr.reduce((a,b)=>{
    return a+b
})
console.log(newarr_reduce)
// the reduce function is works like first adds the fisrt 2 elemnt(cuz here we have passed only 2 parameters if we would have passed 3 parameters then it will bw taking first elements) the after ading the first 2 it add the third elemnt eith the sum of first 2
