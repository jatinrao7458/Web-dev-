// async js is the  js where asynchronous programming is implemented using JavaScript. It allows for non-blocking operations, enabling the execution of code without waiting for previous operations to complete. This is particularly useful for tasks such as network requests, file I/O, and timers.
// example of async js is settimeout function
console.log("I  am jatin ")
console.log("I  am jatin yadav ")

setTimeout(() => {
   console.log("i came late, sorry!!") 
}, 0);

console.log("I am the last console")


// example of callback - 
// its like a function runned inside another function
// in line below we are defining a function named callback which take an argument as perameter and prints that arugment in the console
function callback(arg){
    console.log(arg)
}
// there is a function defined as name loadscript which has two perremters src and callback which take a sorce and call the function 
function loadscript  (src,callback){
    //the below line makes an element named script and stores that in a variable sc
    let sc=document.createElement("script")
    //tells the box where to get the script from (the internet address).
    sc.src=src
    //- Says: “When the script finishes loading, call the helper function and give it the word jatin.”
    sc.onload= callback("jatin")
    //- Actually puts the box into the page’s <head> so the browser starts loading it.
    document.head.append(sc)
}
// here we are calling the function
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
// sometimes there are lots of callback in a simulatenious way i.e the there is function which has a callback and that call back function has a callback inside it ans so on
//this creates a callback hell also  called pyramid of hell in this case we uses the promises.