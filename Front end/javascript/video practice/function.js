function nice(name) {
    console.log("HEY " + name + " your pc is amazing")
    console.log("HEY " + name + " your gameplay is amazing")
    console.log("HEY " + name + " your mnobile is amazing")
    console.log("HEY " + name + " your house is amazing")

}
// this code means that there is a function then ,define the name of function(nice) then in the ( ) define the parameters  like where to make changes
// to add object as parameter we have to add {} the syntax will be like 
// function nice({name})
nice("mukul")
nice("shivam")
//  works like that in nice replace thre perameter name with  ("xyz")
function sum(a, b) {
    // console.log(a+b)
    return a + b
}
// this function works to sum to diff number, the function name is 'sum' , and a,b are the parameters where we can make changes by adding value and after the value we ask it to return the value by adding both of them

result = sum(6, 12)
// here we call the function like there isa variable named result in which we call the function by name'sum' and the in  brackets we add the value of a and b (2,3) the in the function it add 2 and 3 and stores in result

console.log("the sum of thgese numbers is:", result)
// now we print result which will give the value of a+b

const func1 = (x)=>{
    console.log ("i am an arrow function",x)
}
func1(60)
func1(345)
func1(78)