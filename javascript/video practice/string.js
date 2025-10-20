console.log(" thsi is string ")
let a="harry"
console.log(a [0])
console.log(a [1])
console.log(a [2])
console.log(a [3])
console.log(a [4])
// console.log(a [5])
// we can target diff-diff character in string and array using indexing, the above steps are indexing
console.log(a.length)
// .length tells the number of character present 
let name= "harry"
let frnd ="jatin"
console.log(" his name is " + name + " and his frnd name is " + frnd)
// line 16 is an example of template lateral we insert it by using backtick ` (below esc) 
console.log(`his name is ${name} and his frnds name is ${frnd}`)
// examples of escape sequence
// \n -, addes new line

let b= "shivam"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
// slice - slice the element from 1 to 4 by not including 4
// there is a similiar function called splice which is use for array and in that if we say splice(1,4) then it will splice form 1 to 4 index number with including 4 with it  .
console.log(b.slice(1, 4))
// replace remove sh to 88, if there are 2 repetion then only first one will be changed
console.log(b.replace("sh", "88"))
console.log(b.concat(a, " ayush "))
// string are immutable i.e the intial string will be same even after replace ,concat etc.
console.log(b)
