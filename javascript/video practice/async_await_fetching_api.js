function getdata (){
 return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(444)
    },500);
 })
}
console.log('Loading Module');
console.log('do something else');
console.log('Load Data');
// the technique in line 13 and 14 is the techinque to take async javascript in our comtrol like settimeout data ha tabsettimeout jab completee hota ah tab show hota ha lakin yha pe bhla hi data nhi aya lakin ek promise ki traha show ho rha ha , agar esa hi krta to ye end me ata(means jab finsish hota tab ata )
// this technique returns us a promise
let data=getdata()
console.log(data)
console.log('process data');


// technique 2 to do the same we will all the line of code into .then means will work when the romise is resolved
data.then((v)=>{
    console.log(data)
    console.log('process data 1245678');
    console.log("its done 1245678")
    
})


// for better understanding check the async wait example file it might be complicated here
// these technique works but ae a no good practice so here comes the role of async await
// we made this function as an async function means this code will run in the background and will get its work done and return the value later
// this will also give promise
async function getdata2 (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(444444444444444444)
        },3500);
    })
}

// i want to wait for this async function so i will add await like but we have to rap this await in a async function 
async function main() {
    console.log('Loading Module');
    console.log('do something else');
    console.log('Load Data');
    let data2= await getdata2()
    console.log(data2)
    console.log('process data');
    
} 
main()