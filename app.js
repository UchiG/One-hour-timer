let seconds = document.querySelector("#seconds");
let minutes = document.querySelector("#minutes"); 
let startBtn = document.querySelector("#startBtn"); 
let stopBtn = document.querySelector("#stopBtn"); 
let resetBtn = document.querySelector('#resetBtn');

let myTimer;

let myCounter = 0;
let mySeconds = 0;
let myMinutes = 0;

stopBtn.disabled=true;
resetBtn.disabled=true;

startBtn.addEventListener('click', () => {
    stopBtn.disabled=false;
    resetBtn.disabled=false;
    startBtn.disabled=true;
    myTimer = setInterval(() => {
    myCounter++;
    mySeconds = myCounter; 
    seconds.innerHTML = mySeconds;
    
    // start seconds
    if (mySeconds<9) {
        seconds.innerHTML = "0" + mySeconds;
    } 
    // start minutes
    else if (mySeconds > 59) {
        myCounter=0;
        myMinutes++;
        minutes.innerHTML = myMinutes;

    }else {
        seconds.innerHTML = mySeconds;
    }
    if (myMinutes<10) {
        minutes.innerHTML="0" + myMinutes;
    } else {
        minutes.innerHTML= myMinutes;
    }
    if (myMinutes>59) {
        seconds.innerHTML="00"
        minutes.innerHTML="00"
        myCounter= 0;
        myMinutes=0;
        mySeconds=0;
        clearInterval(myTimer);
    }

    },1000);    
});

stopBtn.addEventListener('click', ()=> {
    clearInterval(myTimer);
});

resetBtn.addEventListener('click', ()=>{
    startBtn.disabled=false;
    minutes.innerHTML = '00'
    seconds.innerHTML = '00'
    myCounter=0 
    myMinutes=0;
    mySeconds=0;
    clearInterval(myTimer);
    stopBtn.disabled=true;
    resetBtn.disabled=true;

});