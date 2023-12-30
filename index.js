
let score = 0;
let random = 0;

function increaseScore(){
    score += 10;
    document.getElementById("scoreNm").textContent = score;   
}

function getNewHit(){
    random = Math.floor(Math.random() *10)
    document.getElementById("hitNm").innerHTML = random;
}

function makeBubble(){
clutter = "";
for (let i = 1; i <= 234; i++) {
   let random = Math.floor(Math.random() *10);
  clutter += `<p id="bubble">${random}</p>`;
}
document.getElementById("bBottum").innerHTML = clutter;

};

function timerGame(){
    let timer = 59;
    function updateTimer(){
        document.getElementById("timerNm").innerHTML = timer;
        if(timer >0){
            timer--;
            setTimeout(updateTimer, 1000);
         }
         else{
            document.getElementById("bBottum").innerHTML = " Game Over";
            document.getElementById("hitNm").innerHTML = "-";
         }
    }
    updateTimer();
}

document.getElementById("bBottum").addEventListener("click", function (dets){
    let clickedNum = Number(dets.target.textContent);
    if (clickedNum === random){
        increaseScore();
        getNewHit();
        makeBubble();
    }
});

makeBubble();
getNewHit();
timerGame();



