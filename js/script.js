

const gameNumber = document.getElementById(`game-number`);
const display = document.getElementById(`display-counter`);

let secondsGame = 5;

const countdown = setInterval(function(){
    display.innerText = --secondsGame;
    if(secondsGame === 0){
        clearInterval(countdown);
        gameNumber.classList.add(`d-none`);
       }
   
},1000);


let randomNumber = 5;

let varNum = [];
for(let i=0;i<randomNumber;i++){
    const getRandomnumber = Math.floor(Math.random()*100 -1);
    console.log(getRandomnumber);
    varNum += ` ` + getRandomnumber;
   gameNumber.innerText = varNum;
   while(!varNum.includes(getRandomnumber)){
    varNum.push(getRandomnumber);
   }

}
gameNumber.innerText = varNum;

gameNumber.classList.add

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
    