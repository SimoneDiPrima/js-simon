

const gameNumber = document.getElementById(`game-number`);
const display = document.getElementById(`display-counter`);

let secondsGame = 5;
let userNumber = 0;
let userNumberselect = ``;

const countdown = setInterval(function(){
    display.innerText = -- secondsGame;
    if(secondsGame === 0){
        clearTimeout(countdown);
        gameNumber.classList.add(`d-none`);
    
    }
    console.log(secondsGame);
   
},1000);


 let randomChoice = 5;

function generateRandomNumbers(){
    const randomArray = [] 
    while(randomArray.length < randomChoice)
    {
   let randomNumber;
    
    do{
        randomNumber = Math.floor(Math.random()*100 -1);
    }
    while(randomArray.includes(randomNumber))
    randomArray.push(randomNumber);
}
    return randomArray;

}
const allRandomnumber = generateRandomNumbers(1,100);
gameNumber.innerHTML = `la serie di numeri estratta è :  ${allRandomnumber} `;





// let varNum = [];
// for(let i=0;i<randomNumber;i++){
//     const getRandomnumber = Math.floor(Math.random()*100 -1);
//     console.log(getRandomnumber);
//     varNum += ` ` + getRandomnumber;
//    gameNumber.innerText = varNum;
//    while(!varNum.includes(getRandomnumber)){
//     varNum.push(getRandomnumber);
//    }

// }
// gameNumber.innerText = varNum;


// let userNumber = ``;
// let userArray = [ ];

// const promptdown = setTimeout((function(){
//    for(i = 0; i < randomNumber ; i++)
//    {
//     const userNumber =``+ prompt(`che numero ti ricordi??`)
//     userArray.push(userNumber);
    
//    }
   
// }),2000);
// console.log(userArray);
    