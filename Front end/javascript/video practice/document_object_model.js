//dom is used to map html as a tree
//help us to acces diff tag of html
document.title= "Welcome buddy"
document.body.style.backgroundColor="green"




//bom = browser object model



//more on DOM
console.log(document.body.childNodes)
//stores data as an array can acces data as we used to get in a aray
console.log(document.body.childNodes[1].childNodes)
//there is a random node appearig that is the "text node" node which means that there is no data present and there is space between these tags
//childnodes property help us to acces the node present inside the specified tag
console.log(document.body.firstChild)
//first child us to know the first node i.e here its the text node
//to know the first element child we use the first element child propety this property ignores the text node
console.log(document.body.firstElementChild)
//similiarly last element child is there
console.log(document.body.lastElementChild)

//to know the parnet node  we use the property called parent node
console.log(document.body.lastElementChild.parentElement)


//to know the child elemnets of container we do
console.log(document.body.firstElementChild.childNodes)
// this method provide us the text nodes also but we dont want it so we do (line 31)
console.log(document.body.firstElementChild.children)
//children help us to remove text nodes and give all elements nodes (line 33)
console.log(document.body.firstElementChild.firstElementChild)
console.log(document.body.firstElementChild.firstElementChild.nextElementSibling)
//next element sibiling tells us the next element of the same parent
console.log(document.body.firstElementChild.firstElementChild.nextSibling)
//next sibling tells us the next node of the same parent