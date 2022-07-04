

const gameNumber = document.getElementById(`game-number`);
const display = document.getElementById(`display-counter`);

let secondsGame = 30;

const countdown = setInterval(function(){
    display.innerText = --secondsGame;
    if(secondsGame === 0){
        clearInterval(countdown);
        
    }
},1000);

let randomNumber = 5;

let varNum = ``;
for(let i=0;i<randomNumber;i++){
    const getRandomnumber = Math.floor(Math.random()*100 -1);
    console.log(getRandomnumber);
    varNum += ` ` + getRandomnumber;
    gameNumber.innerText = varNum;
}
