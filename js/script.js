

const gameNumber = document.getElementById(`game-number`);
const display = document.getElementById(`display-counter`);

let secondsGame = 5;
const userNumber = 0;
let userNumberselect = ``;

const countdown = setInterval(function(){
    display.innerText = --secondsGame;
    if(secondsGame === 0){
        clearInterval(countdown);
        gameNumber.classList.add(`d-none`);
        // while(userNumber <= 5){
        //  userNumberselect = prompt(`che numero della serie che hai appena visto ti ricordi?`)
        //  userNumber++;
        //     }
     
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
    