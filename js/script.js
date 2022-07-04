

const gameNumber = document.getElementById(`game-number`);
const display = document.getElementById(`display-counter`);

let secondsGame = 6;
let userNumber = 0;
let userNumberselect = ``;
let secondTIme;
let promptDown;


const countdown = setInterval(function(){
    display.innerText = --secondsGame;
    if(secondsGame === 0){
        display.classList.add(`d-none`);
        gameNumber.classList.add(`d-none`);
        clearInterval(countdown);
        const promptDown = setTimeout(promptMessage,500);
        const alertDown = setTimeout(alertMessage,1000);
    }
    clearTimeout(promptDown);
    console.log(secondsGame);
   
},1000);


 let randomChoice = 5;

function generateRandomNumbers(){
    const randomArray = [] 
    while(randomArray.length < randomChoice)
    {
   let randomNumber;
    
    do{
        randomNumber = Math.floor(Math.random()*100 + 1);
    }
    while(randomArray.includes(randomNumber))
    randomArray.push(randomNumber);
}
    return randomArray;

}
const allRandomnumber = generateRandomNumbers(1,100);
gameNumber.innerHTML = `la serie di numeri estratta è :  ${allRandomnumber} `;


function promptMessage(){
   const promptArraynumber = [];
   while(promptArraynumber.length < randomChoice){
    promptNumber = prompt(`dimmi un numero della serie:`)
    promptArraynumber.push(promptNumber);
   }
   console.log(promptArraynumber);
   return promptArraynumber;
}
function alertMessage(){
 alert(`complimenti hai vinto!`)
 }

