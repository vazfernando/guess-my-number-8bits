'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = '🙈 Correct Number');

// console.log(document.querySelector('.label-score').textContent);
// console.log(document.querySelector('.label-score').textContent = '💯 Super Score: 17');

// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.number').textContent = 17);

// console.log(document.querySelector('.guess').value = 14);
// console.log(document.querySelector('.guess').value);

        // 73. Handling Click Events         
        // 74. Implementing the Game Logic

let number = Number (document.querySelector('.number').value);
number = Math.trunc(Math.random() * 21)
console.log(number)
// let score = Number (document.querySelector('.score'))
let score = 20
let highScore = Number (document.querySelector('.highscore').textContent)
highScore = 0
let guess = Number (document.querySelector('.guess').value);
// console.log(guess)
const callNumber = (number) => {
    document.querySelector('.number').textContent = number
    document.querySelector('.number').style.backgroundColor = 'black';
    document.querySelector('.number').style.color = 'white';  
    document.querySelector('.number').style.width = '30rem';
    // return number;
}

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}

const checkButton = document.querySelector('.check').addEventListener('click', function () {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if(!guess) { // No number typed
        displayMessage("🛑 Type a number between 1 and 20." + ' Press "Play Again!" to play right away');
        document.querySelector('.check').style.display = 'none';
        // score = score - 1;
        // document.querySelector('.score').textContent = score;
        // if (score <= 0) { // YOU LOST - Stops os Zero
        //     score = 0
        //     document.querySelector('.score').textContent = score
        //     displayMessage('💥 You lost the game')
        //     document.body.style.backgroundColor = 'red'
        //     document.querySelector('.number').style.backgroundColor = 'black';
        //     document.querySelector('.number').style.color = 'white';
        // }
    } else if (guess > 20 || guess <= 0) { // Numbers > 20 || Numbers < 0
        displayMessage("🛑 Type a number between 1 and 20");
    } else if (guess === number) { // Winner!! guessed the right number!
        displayMessage("✅ That's the right number");
        callNumber(number);
        // document.querySelector('.number').style.width = '30rem';
        document.querySelector('.check').style.display = "none";
        // highScore++
        document.body.style.backgroundColor = 'rgb(79, 161, 102)'

        if (score > highScore) { // Copy Score do Highscore
            highScore = score
            document.querySelector('.highscore').textContent = highScore
            if (highScore === 20) {
            alert ('You master the game. You won without missing a single point. To play on more time press the button PLAY AGAIN!?');
            }
        } else {
            document.querySelector('.highscore').textContent = highScore
        }
    } else if (guess !== number) {
        displayMessage(guess < number ? "⬆ Try a little bit higher" : "⬇ Try a little bit lower");
        score = score - 1
        document.querySelector('.score').textContent = score
        if (score <= 0) { // Zero Score - No points to play anymore
                    score = 0
                    displayMessage('💥 You lost the game');
                    document.querySelector('.score').textContent = score;
                    document.body.style.backgroundColor = 'red';
                    callNumber(number)
                    // document.querySelector('.number').style.backgroundColor = 'black';
                    // document.querySelector('.number').style.color = 'white';
                }
    }       
}); 

// BUG: Numeros > 20 && numeros < 0 estão sendo aceitos e entregando a mensagem "A little bit lower/higher", quando deveria existir uma lógica para não aceitar esses números. Quando ocorrer apresentar a mensagem "Try numbers between 1 and 20". 

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input fields.
// 4. Also restore the original background color (#222) and number width (15rem)

const playAgain = document.querySelector('.again').addEventListener('click', function(){
    number = Math.trunc(Math.random() * 21);
    console.log(number);
    document.querySelector('.number').textContent = '?';
    guess = '';
    document.querySelector('.guess').value = guess;
    // console.log(guess)
    score = 20;
    document.querySelector('.score').textContent = score
    document.querySelector('.message').textContent = 'Start guessing again...'
    document.body.style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.check').style.display = "block";
});