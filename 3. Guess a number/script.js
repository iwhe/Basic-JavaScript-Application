let randomNumber = parseInt(Math.random() * 10 + 1);

console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowHigh = document.querySelector(".lowOrHigh");
const playAgain = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let userGuess = parseInt(userInput.value);
    validateGuess(userGuess);
  });
}

function validateGuess(guess) {
  if (guess < 1 || guess > 10) {
    alert("Enter value between 1 and 10!");
    // playAgain.innerHTML = "<p> Enter value between 1 and 10!</p>";
  } else if (isNaN(guess)) {
    alert("Enter a valid number!");
    // playAgain.innerHTML = "<p> Enter valid number! </p>";
  } else {
    prevGuess.push(guess);
    if (numGuess === 6) {
      displayMessage(guess);
      displayMessage(`Game Over! Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You Won! You guessed it correctly!");
  } else if (guess < randomNumber) {
    displayMessage("Your guess is lower...");
  } else if (guess > randomNumber) {
    displayMessage("Your guess is Higher...");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${6 - numGuess}`;
}

function displayMessage(message) {
  lowHigh.innerHTML = `<h2> ${message} </h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<p id = "newGame"> Game Over! Do you want to play again?</p>`;
  playAgain.appendChild(p);
  playGame = false;
  startOver();
}

function startOver() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${6 - numGuess}`;
    userInput.removeAttribute("disabled");
    playAgain.removeChild(p);
    playGame = true;
  });
}
