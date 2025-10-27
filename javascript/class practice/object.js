let car = {
    name:"Porsche 911",
    Year_of_production : 2011,
    owner : "Jatin yadav",
    }
//there is a diff between maps and object ,in object it print the keys in aplhabetical order when we inspect a webpage, but a map displays the same order in which its added 
// accesing values
// dot notation
console.log(car.name)
// bracket notation
console.log(car['owner'])
// adding values
car.brand='Porsche'
// updating values 
car.Year_of_production =2022
 console.log(car)
//  deletion
delete car.brand
console.log(car)

console.log(Object.keys(car))
console.log(Object.values(car))
console.log(Object.entries(car))
// line 25 to check wheter the key exists or not 
console.log("name" in car)
// we can merge 2  diff object with each other by 2 ways
let a = {
    Name: 'jatin',
    Age: "18"
}
let b ={
    Age: "19",
    City: "Delhi"
}
// method 1
let c = {...a,...b}
console.log(c)
// method 2
let d = Object.assign({},a,b)
console.log(d)
// these 2 methods are shallow methos that is they overwrite the value of same key as we show in case of age 