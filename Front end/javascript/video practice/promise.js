// this code creates a self made promise here we are taking a random number if that is <0.5 then we reject the promise i.e it will show an error , and if its greater than 0.5 then we passes the promise"No random number didnt supported u "
// agar na work kra to ek error ban dena 
//this works like ki agar set timeout work kar jya to resolve kar dena and store jatin
// THen (".then") wala code jo bhi value resolve hui ha usa catch kar lega and performs a funcion(handlers) with that resolved value(" .then catches the resolved value")
// we uses.catch to get the error and its used to handle the error 
// .catch errror catch kar lega and perform the function we stated to do 
let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("No random number didnt supported u ")
    }
    else{

        setTimeout(() => {
            console.log('I am jatin');
            resolve("Jatin")
        }, 3000);
    }
})
// this code snipet in the comment is the promise we talked above .catch then


prom1.then((a)=>{
    console.log(a);   
}).catch((err)=>{
    console.log(err);
})

let prom2 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("No random number didnt supported u  1245667")
    }
    else{

        setTimeout(() => {
            console.log('I am jatin 1245667');
            resolve("Jatin 1245667")
        }, 1000);
    }
})

// promise.all it returns the array only when both the promises are resolved 
// the code is like we defines an new promise p3 which takes an identity .all it means it will work whenn both thee promises are resolved
// if p3 works then the cycle of .then and .catch will work
let p3=Promise.all([prom1,prom2])
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err)
})

//allsetteled will return value when the promise works, doesnt depend on weither its rejected for resolved 
let p4=Promise.allSettled([prom1,prom2])
p4.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err)
})


// .race means when two promises are runned together which one fnishes first its value is given as the output doesnt depend on witehr its gives earror or is resolved 
let p5=Promise.race([prom1,prom2])
p5.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err)
})


//.any mans which one is resolved first that will be outcome whereas in .race the one to come first is the outcome
let p6=Promise.any([prom1,prom2])
p6.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err)
})