let car = {
    name:"Porsche 911",
    Year_of_production : 2011,
    owner : "Jatin yadav",
    }
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

