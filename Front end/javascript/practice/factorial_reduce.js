let a = prompt("enter your number")
function factorial(number) {
    // shortcut to make an array .keys is a fuction adds data the value inputted into it 
    // made an array using shortcut in line 5
    // array.from means we want ot make an  array
    let arr= Array.from(Array(number+1).keys())
    //remove the element from 0 index number to one i.e 0

    let c =arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    return c
}
factorial(a)
