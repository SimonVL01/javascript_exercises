var number = Math.round(Math.random() * 10);

document.write("Winning number: " + number + "<br/>");

var enteredNumber;

function guess() {
var userGuess = Number(prompt("choose a number."));
userGuess;
enteredNumber = userGuess;
}

function guessingGame() {

    guess();
    while(enteredNumber !== number) {
        if (enteredNumber < number) {
        alert("Number too low, try again!");
        guess();
        } else if (enteredNumber > number) {
            alert("Number too high, try again!");
            guess();
        } else if (typeof enteredNumber !== 'number') {
            alert("Is not a number, try again!");
            guess();
        }
    }

    var el = document.getElementById("win");

    el.textContent += "Congratulations, you have entered winning number: " + number + "\n";

    number = Math.round(Math.random() * 10);

}

guessingGame();

var el = document.getElementById("new");
el.addEventListener("click", guessingGame);