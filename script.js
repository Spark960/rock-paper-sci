let comcho = 0, humancho = 0;
let comscore = 0, humanscore = 0;
function getcompcho()
{
    let a = Math.random() * 3;
    if(a > 2)
    {
        return "Rock";
    }
    else if(a > 1 && a < 2)
    {
        return "Scissors"
    }
    else{
        return "Paper"
    }
}
function capitalize(str)
{
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(human)
{
    comcho = getcompcho();
    humancho = capitalize(human);
    let result = document.querySelector("#result");

   if(comcho === humancho)
   {
    result.textContent = "It's a tie"
   }
   else if((humancho === "Rock" && comcho === "Scissors") || (humancho === "Paper" && comcho === "Rock") || (humancho === "Scissors" && comcho === "Paper"))
   {
    result.textContent = `You win, ${humancho} beats ${comcho}`;
    humanscore++;
   }
   else if((comcho === "Rock" && humancho === "Scissors") || (comcho === "Paper" && humancho === "Rock") || (comcho === "Scissors" && humancho === "Paper"))
   {
    result.textContent = `You lose, ${comcho} beats ${humancho}`;
    comscore++;
   }
   if(comscore === 5 || humanscore === 5)
   {
    if(comscore === 5)
    {
        result.textContent = "Computer Wins";
    }
    if(humanscore === 5)
    {
        result.textContent = "Human Wins";
    }
    btns.forEach((btn) => {
        btn.disabled = true;
    })
   }
   let score = document.querySelector("#score");
   score.textContent = `Computer Score is ${comscore}, Human Score is ${humanscore}`;


}

let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const choice = event.target.id;
    switch (choice) {
      case "rock":
        playRound("rock");
        break;
      case "paper":
        playRound("paper");
        break;
      case "scissors":
        playRound("scissors");
        break;
    }
  });
});

