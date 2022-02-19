const downloader = document.querySelector(".downlaoder__background");
const numberGoal = document.querySelector(".downloader__left");
const theElementText  = document.getElementById("goal");
const theBall  = document.querySelector(".ball");

const goal = numberGoal.dataset.number; 
window.getComputedStyle(downloader).height ;

window.onload = function(){
    downloader.style.width = downloader.dataset.width;
    theBall.style.left = theBall.dataset.position;
    let count = setInterval(() => {
    theElementText.textContent++;
    if( theElementText.textContent == goal){
        clearInterval(count) 
    }
}, 10)}

