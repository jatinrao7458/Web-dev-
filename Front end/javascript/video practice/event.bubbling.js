  //this is event bubbling like if we click the child it means we have automatically clicked the parent and containner
  // for analogy take that we live in delhi techanically we live in india automatically similiarly we also techanically live in asia
  let child=document.querySelector(".child")
  let container=document.querySelector(".container")
  let parent=document.querySelector(".parent")
  child.addEventListener("click",(e)=>{
    e.stopPropagation()
    // the code in the line 7 stops the eveny bubbling i.e it stops the chain of event and prevent the event bubbling but we can see bubbling when clicking the parent
    alert("Child was cicked")
  })  
  parent.addEventListener("click",()=>{
    alert("parent was cicked")
  })  
  container.addEventListener("click",()=>{
    alert("conatiner was cicked")
  })  