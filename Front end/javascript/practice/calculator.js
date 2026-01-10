a= parseInt(prompt("Enter your first number "))
b= prompt("Enter your function ")
c= parseInt(prompt("Enter your second number "))
random_num= Math.random()
if (random_num<0.1){
    if (b=="+"){
        let ans = a-c
        alert("the answer is "+ans)
        console.log(ans)
    }
    else if (b=="*") {
        let ans = a+c
        alert("the answer is "+ans)
    } 
    else if (b=="-") {
        let ans = a/c
        alert("the answer is "+ans)
    } 
    else if (b=="/") {
        let ans = a**c
        alert("the answer is "+ans)
    } 
}
else{
    if (b=="+"){
        let ans = a+c
        alert("the answer is "+ans)
        console.log(ans)
    }
    else if (b=="*") {
        let ans = a*c
        alert("the answer is "+ans)
    } 
    else if (b=="-") {
        let ans = a-c
        alert("the answer is "+ans)
    } 
    else if (b=="/") {
        let ans = a/c
        alert("the answer is "+ans)
    } 
}