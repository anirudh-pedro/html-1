result = document.getElementById("result");
choices = ["rock", "paper", "scissors"];
function getCompChoice() {
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}   
function play(userChoice) {
    let data = userChoice;
    console.log(data);
    let compChoice = getCompChoice();
    console.log(compChoice);
    if (userChoice === compChoice) {
        result.innerHTML = "It's a Tie!";
    }
    else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        result.innerHTML = "You Win!";
    } else {
        result.innerHTML = "You Lose!";
    }
}

