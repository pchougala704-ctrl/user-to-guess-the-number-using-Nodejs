const readline = require('readline');

// Generate a random number between 1 and 100 (inclusive)
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('🎯 Welcome to the Number Guessing Game!');
console.log('I have picked a number between 1 and 100.');
console.log('Can you guess it?\n');

function askGuess() {
  rl.question('Enter your guess: ', (input) => {
    const guess = parseInt(input, 10);

    // Validate input
    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log('⚠️  Please enter a valid number between 1 and 100.\n');
      askGuess();
      return;
    }

    attempts++;

    if (guess < secretNumber) {
      console.log('📉 Too low! Try a higher number.\n');
      askGuess();
    } else if (guess > secretNumber) {
      console.log('📈 Too high! Try a lower number.\n');
      askGuess();
    } else {
      console.log(`\n🎉 Correct! The number was ${secretNumber}.`);
      console.log(`✅ You guessed it in ${attempts} attempt${attempts === 1 ? '' : 's'}!`);
      rl.close();
    }
  });
}

askGuess();
