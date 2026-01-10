let buttton = document.getElementById('my-button')
let clicks = 0
let score = document.getElementById('score')
buttton.addEventListener('click',total)
function total(){
    clicks++
    score.innerText=`Score= ${clicks}`
}