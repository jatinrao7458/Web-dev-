// async js is the  js where asynchronous programming is implemented using JavaScript. It allows for non-blocking operations, enabling the execution of code without waiting for previous operations to complete. This is particularly useful for tasks such as network requests, file I/O, and timers.
// example of async js is settimeout function
setTimeout(() => {
    console.log("This message is displayed after a delay of 2 seconds");
}, 0);
console.log("This message is displayed immediately");

const loadscript =(src,callback)=>{
    let sc = document.createElement("script");
    
}