let a = [94 ,87,77,65,5 ,4 ]
a.forEach((value,index,arr)=> {
    console.log(value,index,arr)
})
//This is a for each loop,this loop prints the value of each element , index of each element and aray again and again for the array "a" defined in the beginning


let obj ={
     "name":"Jatin",
     "Surname":"Yadav",
     "Course":"B-Tech"
}
//for in loop
for (const i in obj) {
    if (!Object.hasOwn(obj, i)) continue;
    
    const element = obj[i];
    
    console.log(element)
}                                                                                                                 
// The hasOwnProperty() method is not a "tag" for a loop but a function used to check if a property is a direct member of an object 
//THE loop in line 1 is a "for in" loop which is mainly used in  the contaxt of a object  like we "first define a variable" in "object name" 
//the line 15 is the default line but this line check wheter the obj element are the part of this object or not in arries for in loop 
//but in mine the meaning is similiar but it says if not obj is not a part of it the continue i.e leave that element
//next line stores the value in an variable 

//for of loop
for (const el of a) {
    console.log(el)
}
//just like a normal for loop but for an array and object
//define a variable and in which variable do we have to runm this loop tells its name