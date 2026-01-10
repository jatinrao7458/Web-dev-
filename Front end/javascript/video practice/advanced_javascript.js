//iife
async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(54)
        }, 1000);
    })
}

// the code bellow is the iife i.e immediatly inwoked function expression i.e it will execute immediatly
(async function main(){
    let a = await sleep()
    console.log(a);
    let b = await sleep()
    console.log(b);
})()


// destructring in array
// these ... makes the other variablble as an array i.e x=1 y=5 and rest value are added a sarray in rest named variable
let [x, y, ... rest]=[1,5,65,7,6786,8679879,9,7,6786,54]
console.log(x,y,rest)

// destructring in object
let obj ={
    a:2,
    b:5,
    c:7
}
// this help us to make a and b as variable so that we can easily extract data from the object
let {a,b} =obj
console.log(a,b)


// spread syntax 
function sum (a,b,c){
    return a+b+c
}
let arr =[1,2,56]
console.log(arr[0]+arr[1]+arr[2])// old method to sum value of an array
console.log(sum(arr[0],arr[1],arr[2]))// old method to sum value of an array

// easy and new method 
// by using spread operater that means arr ko khol do
console.log(sum(...arr))

// hosting concept --like if we console.log a variable at the top of block (like agar function ka undar define kar rakha ha to us function ka under hi hona chiye for more detail watch cwh video 82) and define the variable using var at the bottom it will not show an error wheras show undefined 
// hosting don't work for let and const