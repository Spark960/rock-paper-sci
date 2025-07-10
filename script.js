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
function gethumancho()
{
    return prompt("What is your choice?");

}
function capitalize(str)
{
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function playRound()
{
    comcho = getcompcho();
    humancho = capitalize(gethumancho());
   if(comcho === humancho)
   {
    console.log("It's a tie")
   }
   else if((humancho === "Rock" && comcho === "Scissors") || (humancho === "Paper" && comcho === "Rock") || (humancho === "Scissors" && comcho === "Paper"))
   {
    console.log(`You win, ${humancho} beats ${comcho}`);
    humanscore++;
   }
   else if((comcho === "Rock" && humancho === "Scissors") || (comcho === "Paper" && humancho === "Rock") || (comcho === "Scissors" && humancho === "Paper"))
   {
    console.log(`You lose, ${comcho} beats ${humancho}`);
    comscore++;
   }

}

function playGame()
{
    let i = 0;
    for(i = 0; i < 5; i++)
    {
        playRound();
        print(console.log(`Computer score is ${comscore}, Human Score is ${humanscore}`))

    }

}

playGame();