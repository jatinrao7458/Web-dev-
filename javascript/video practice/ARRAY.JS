let arr =[1, 4, 5 ,5]
// array are mutable i.e after the function in 3rd line it will change the original array 
console.log(arr.toString())
arr[0 ]= 233
// console.log(arr)
// console.log(arr.length)
console.log(arr.join(" and "))
let a1= [4,3,5,6]
let a2=[1,9,8,7]
let a3= [4,6,8,9] 
console.log(a1.concat(a2,a3))
// concat joins to diff array with each other 
console.log(a1.sort())
// line 13 sort means to arrange according to the number 
// for array both slice and splice work for it 
a1.splice(0,2)
console.log(a1)