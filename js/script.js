

const gameNumber = document.getElementById(`game-number`);
const display = document.getElementById(`display-counter`);
const paragraph = document.getElementById(`paragraph`);
const max = 99;
const min = 1;
let secondsGame = 30;
let userNumber = 0;
 randomChoice = 5;

display.innerText = secondsGame;
const countdown = setInterval(function(){

    if(secondsGame === 0){
        display.classList.add(`d-none`);
        gameNumber.classList.add(`d-none`);
        paragraph.classList.add(`d-none`);
        clearInterval(countdown);
       
    }
    else{display.innerText = --secondsGame}
    console.log(secondsGame);
   
},1000);
setTimeout(() => {
   const promptArraynumber = [];
    while(promptArraynumber.length < randomChoice){
    const numbers = userPromptnumber(min, max);
    if(!promptArraynumber.includes(numbers)){
        promptArraynumber.push(numbers);
    }}
   const userArraycorrect = []

for(let i = 0 ; i < randomChoice;i++){
    if(allRandomnumber.includes(promptArraynumber[i])){
       userArraycorrect.push(promptArraynumber[i]);
    }
    }
    alert(`Bravo!i numeri che hai indovinato sono:(${userArraycorrect}) hai totalizzato ${userArraycorrect.length} punti!`);
},32200)


function generateRandomNumbers(){
    const randomArray = [ ] 
    while(randomArray.length < randomChoice)
    {
        const randomNumbers = Math.floor(Math.random()*max + 1 - min)+min;
    if(!randomArray.includes(randomNumbers))
        {randomArray.push(randomNumbers);}
    }   
    return randomArray;
}
const allRandomnumber = generateRandomNumbers(1,100);
let items = ` `;

for(let i = 0; i < randomChoice ; i++){
    items +=  `<li>${allRandomnumber[i]}</li>`;
}
gameNumber.innerHTML = items;


function userPromptnumber(){
  let userPromptnumber;

  while(isNaN(userPromptnumber)||userPromptnumber < 1 || userPromptnumber > 100){
    userPromptnumber = parseInt(prompt(`che numero ti ricordi tra quelli appena estratti??`))
  }

console.log(userPromptnumber)
  return userPromptnumber;
   
}
