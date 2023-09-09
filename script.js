'use strict'
const ingredients = ['apple', 'mango']
const appleTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`), 3000,
    ...ingredients);



console.log("Waiting.......... ");









/*const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
    (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
    3000,
    ...ingredients
);
console.log('Waiting...');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
// setInterval
setInterval(function () {
    const now = new Date();
    console.log(now);
}, 1000);















/*const labelTimer = document.querySelector('.timer');


function startLogOutTimer= function() {
    let time = 100;
    setInterval(function () {
        labelTimer.textContent = time;
        time--;
    }, 1000);
};
startLogOutTimer();


























/*
var count=5;
let setTime=function(){

*/














/*var counter = 5;


function setUp() {
    noCanvas();
}
var timer = select('#timer');
timer.html('0');



function timeIt() {
    counter--;
    console.log(counter);
}
setInterval(timeIt, 1000);



/*var timeleft = 10;
var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
    }
    document.getElementById("progressBar").value = 10 - timeleft;
    timeleft -= 1;
}, 1000);*/







/*const ab = document.querySelector('numCountDown');







var Time = 6;
document.querySelector('.btn-start').addEventListener('click', function () {
    const TimeS = function () {


        setInterval(function () {


            if (Time > 0)


                ab.innerHTML = Time;



            console.log(Time);

        }, 1000)
    }
    TimeS();
}































/*const labelTimer = document.getElementById('btn-start');

document.querySelector('.btn-start').addEventListener('click', function () {
    const startTimer = function () {
        let time = 5;
        setInterval(function () {
            time--;
        }, 1000)


    }
})

startTimer();*/







































/*




const event = document.createEvent('Evenet');
event.initEvent('countdown', true, true);
document.addEventListener('countdown', function (e) {
    numTimeElapsed = 0;
    console.log("countdown done!");
}, flase);

let numTotalTime = 5;
let numTimeElapsed = 0;
let countDownInterval;
let hasCountDownStarted = false;


let btnStart = document.getElementsByClassName("btn-start");
let btnStop = document.getElementsByClassName("btn-stop");
let btnReset = document.getElementsByClassName("btn-back");

btn.style.display = 'none';

function resetCountDown() {
    numCountDown.innerHTML = numTotalTime;
    numTimeElapsed = 0;
    stopCountDown();
}
function stopCountDown() {
    hasCountDownStarted = false;
    btnStop.style.display = 'none';
    btnStart.style.display = 'inline';
    clearInterval(countDownInterval);


}
function startCountDown() {
    if (!hasCountDownStarted) {
        hasCountDownStarted = true;
        btnStop.style.display = 'inline';
        btnStart.style.display = 'none';



    } else {
        stopCountDown();
        return;
    }

    countDownInterval = setInterval(() => {


        numTimeElapsed++;
        numCountDown.innerHTML = numTotalTime - numTimeElapsed;
        if (numTotalTime === numTimeElapsed) {
            document.dispatchEvent(event);
            clearInterval(countDownInterval);
        }

    */
