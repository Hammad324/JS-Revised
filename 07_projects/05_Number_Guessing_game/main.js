/* 
// In vanilla JS

let i = 1;
let attempts = [];
let remainingAttempts = 3;

while(i <= 3) {

    const numberGuessingGame = (userInput = +prompt("Enter a number")) => {
 
        const number = Math.floor(Math.random() * 100 + 1);
        //console.log(`Random number was ${number}`)
        console.log(`You entered ${userInput}.`)

        // important checks

        if (userInput === '' || userInput === 0 || isNaN(userInput) || userInput > 100) {
            console.log(`Enter a valid value.`); 
        }

        if(number === userInput) {
            console.log(`You win, the number was ${number}`)
        } else { 
            console.log(`You loose, the number was ${number}`)
        }
        
        attempts.push(userInput);

    }
    
    i++;

    numberGuessingGame();
    remainingAttempts = remainingAttempts - 1;
    console.log(`You have ${remainingAttempts} attempts remaining. \n`);

};

console.log(`You have used these numbers ${attempts}`); */

// By using DOM.

const randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const previousGuess = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let guessNum = []; // previousGuess
let remGuess = 10; // remainingGuess

let playGame = true;

submit.addEventListener('click', (event) => {
  event.preventDefault();

  const guess = parseInt(userInput.value);
  //console.log(guess);
  guessValidator(guess);
});

const guessValidator = (guess) => {
  if (guess === 0 || guess < 0 || guess > 100 || isNaN(guess) || guess === '') {
    alert(`Enter a valid guess`);
  } else {
    guessNum.push(guess);
    guessChecker(guess);
  }
};

const guessChecker = (guess) => {
  if (guess === randomNumber) {
    lowOrHi.innerHTML = `You win. The random number was ${randomNumber}`;
    gameEnd();
    console.log(`You win. The random number was ${randomNumber}`);
  } else if (randomNumber != guess) {
    userInput.value = '';
    previousGuess.innerHTML = `${guessNum}`;
    remainingGuess.innerHTML = `${remGuess - 1}`;
    remGuess--;
    //remainGuess(guess);
    hint(guess);
  }
};

const hint = (guess) => {
  if (guess < randomNumber) {
    lowOrHi.innerHTML = `Too low.`;
  } else {
    lowOrHi.innerHTML = `Too high.`;
  }
  if (remGuess <= 0) {
    lowOrHi.innerHTML = `You loose, the random number was ${randomNumber}. Would you like to restart.`;
    gameEnd();
  }
};

/* const remainGuess = () => {
  if (remGuess <= 0) {
    lowOrHi.innerHTML = `You loose, the random number was ${randomNumber}. Would you like to restart.`;
    gameEnd();
  }
}; */

const gameEnd = () => {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.innerHTML = `<button style="cursor: pointer";> Restart? </button>`;
  startOver.appendChild(p);
};

const gameStart = () => {
  //
};
