let btn= document.getElementById("btn")
// the code in line 4 creats a event for the variable btn ,,,, the code works like the attribute addeventlistner has two peremeters in which first peremeter is the type of event which is to added and the second perameter is a function (arrow function)
// which works like on click it changes the inner html of the class box
btn.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="I m changed"
})
// check for new events over google from mdn
btn.addEventListener("contextmenu",()=>{
    document.querySelector(".box").innerHTML="shitt!! u right clicked it now we all are gonna die"
})
