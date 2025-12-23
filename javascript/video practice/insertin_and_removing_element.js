console.log(document.querySelector(".box").innerHTML)
// inner html help us to get the html inside the tag
console.log(document.querySelector(".container").innerHTML)
// inner html gives trhe output in the way with html tags  wheras innerText only give the text inside it
console.log(document.querySelector(".container").innerText)

console.log(document.querySelector(".container").outerHTML)
// outer html give us the html outside this selcted element
console.log(document.querySelector(".container").tagName)
// diff btw the node name and the tag name is tag name is only valid for the tag name and node name is valid for every type of node
console.log(document.querySelector(".container").nodeName)
console.log(document.querySelector(".container").textContent
)
console.log(document.querySelector(".container").hidden)
console.log(document.querySelector(".container").hidden=true)
// this code in line 16 will hide the element present with the class container
console.log(document.querySelector(".container").hidden=false)
// hidden property help us to hide the element
document.querySelector(".box1").innerHTML="Hello im jatin rao"
// queryselector only selects the first element of that class name 
// code in line 20 changes the text in the html and replaces it with a new text and tag
console.log(document.querySelector(".box1").hasAttribute("style"))//returns truee
console.log(document.querySelector(".box").hasAttribute("style"))// here it returning false bcz style is there but not as a attribute it will return true in case of inline css("returns false")
//has attribute returns boolean wheter it has that attribute or not returns ("true or false ")
// wheras getattribute  tells what is that attribute and what is the value present in it 
console.log(document.querySelector(".box1").getAttribute("style"))
// set attribute helps u to change the attribute present according to urself first perameter passed is the attribute and other parameter has what is to be present in that attribute 
document.querySelector(".box1").setAttribute("style","color:red;")
console.log(document.querySelector(".box1").attributes)
// attributes help us to get an array of attributes presnt in that specific element
document.querySelector(".box1").removeAttribute("style")
// the remove attribute removes the attribute defined bvy us 
// with the help of data attribute we can creat ethe custom attribute (implemented in html)
//to access these we have to do
console.log( document.querySelector(".box1").dataset)
//stores data like  as key value pair     
