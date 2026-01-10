// we are using a formula here to make a random number i.e a+r(b-a) where a is the minimum limit and the b is the maximum limit over here and r is the random number generated over here . This method help us to make a final digit but it will also have some decimal value so we will be using ceil function which provides a NUMBER which is greater than the decimal number
function getrandomcolor(){
    a= Math.ceil(0+Math.random()*(255))
    b= Math.ceil(0+Math.random()*(255))
    c= Math.ceil(0+Math.random()*(255))
    return `rgb(${a},${b},${c})`
}
boxes = document.getElementsByClassName("box")
// this code in line 5 returns an array
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getrandomcolor()
})