let n22ew = document.getElementsByClassName("box")
console.log(n22ew)

n22ew[2].style.backgroundColor="red"
// we use the get element by id when we need to be specifc 
// its better than intial dom cuz we can us the old method only when the elements are near

document.querySelector(".box").style.backgroundColor="green"
// query selector help us to target the css property
// query selctor only works on the first element


// using queryselctorAll
// we cannot use this style property changing as we used to in query selector
// bcz the queryselctorAll returns an html collection (array) 
// so we cannot change the color of all the element at once
// to do so we can use for each loop
// wrong method (line19)
// document.querySelectorAll(".box").style.backgroundColor="green"
document.querySelectorAll(".box").forEach((e)=>{
    e.style.backgroundColor=("green")
})



// get elemnets by tag name
// returns the html collection gives all the tag 
console.log(document.getElementsByTagName("div"))

// matchs 
// help us find wheter the selected has that selector or not
e= document.getElementsByClassName("box")[1]
console.log(e.matches("#name"))
f= document.getElementsByClassName("box")[3]
console.log(f.matches("#name"))


// closset
// tells the closset ancestor which has that class or id name 
g=document.getElementsByClassName("box")[3]
console.log(g.closest("#name"))
// in line 41 returns null cuz there is no such ancestor which has an id named name
console.log(g.closest(".container"))

// contains
// tells whether the outer element contain the inner element
h=document.querySelector(".container")
console.log(h.contains(g))
console.log(h.contains(document.querySelector(".container")))
console.log(h.contains(document.body))