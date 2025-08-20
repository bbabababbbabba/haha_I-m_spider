let count=0;
let startTime;
let timer;
let flag=0;

function hello(){
    if(flag==0){
        count++;
        document.getElementById("score").textContent = count;
        const button = document.getElementById("start-btn");
        const x = Math.random() * (window.innerWidth - button.offsetWidth);
        const y = Math.random() * (window.innerHeight - button.offsetHeight);
        button.style.position = "absolute";
        button.style.left = x + "px";
        button.style.top = y + "px";
        button.style.display = "block"; 
    }
    if(count>=50){
        flag=1;
        clearInterval(timer);
        const totalTime = (Date.now() - startTime) / 1000;
        alert(totalTime.toFixed(3)+"초");
        button.disabled = true;
    }
}

window.onload = function(){
    const timerDisplay = document.getElementById("timer");
    startTime = Date.now();
    timer = setInterval(function () {
        let elapsed = Date.now() - startTime;
        timerDisplay.textContent = (elapsed / 1000).toFixed(3) + "초";
    }, 10);
};