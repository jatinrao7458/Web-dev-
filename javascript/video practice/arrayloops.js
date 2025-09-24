let a= [1,53,5,6,88]
for (let index = 0; index <a.length; index++) {
    const element =a[index];
    
    console.log(element)
}
a.forEach((value, index,arr)=> {
    console.log(value,index,arr)
});

let obj = {
    a: 1,
    b: 2,
    c: 3,
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}
for (const element of a) {
   console.log(element) 
}





// let newA =[]
// for (let index = 0; index <a.length; index++) {
//     const element =a[index];
// newA.push(element**2)
// }
// console.log(newA)
let newA =a.map((e)=>{
    return(e**2)
})
console.log (newA)
const above5= (e)=>{
    if(e>5){return true}
    return false;
}


console.log(newA.filter(above5))