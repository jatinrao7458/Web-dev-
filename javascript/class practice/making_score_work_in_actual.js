// local storage
localStorage.setItem("Score",6);
let score =localStorage.getItem("Score")
console.log(score)
document.getElementById("score-ele").innerText=score
// to remove the data 
localStorage.removeItem("score")
// to clear data 
localStorage.clear()

// Session storage

