

const gameNumber = document.getElementById(`game-number`);

let randomNumber = 5;

let varNum = ``;
for(let i=0;i<randomNumber;i++){
    const getRandomnumber = Math.floor(Math.random()*100 -1);
    console.log(getRandomnumber);
    varNum += ` ` + getRandomnumber;
    gameNumber.innerText = varNum;
}
