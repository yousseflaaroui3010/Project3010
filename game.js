// interactive-game.js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Store the game state
let gameState = {
    targetNumber: null,
    attempts: 0,
    maxAttempts: 5,
    gameActive: false,
    previousGuesses: []
};

// Initialize a new game
function startGame() {
    gameState.targetNumber = Math.floor(Math.random() * 100) + 1;
    gameState.attempts = 0;
    gameState.gameActive = true;
    gameState.previousGuesses = [];
    
    console.log('\nNew game started! Guess a number between 1 and 100');
    console.log(`You have ${gameState.maxAttempts} attempts remaining`);
    askForGuess();
}

// Process a player's guess
function makeGuess(guess) {
    // Input validation
    if (!gameState.gameActive) {
        console.log('Game is over! Starting a new game...');
        return startGame();
    }
    
    // Convert input to number and validate
    const numberGuess = Number(guess);
    if (isNaN(numberGuess) || numberGuess < 1 || numberGuess > 100) {
        console.log('Please enter a valid number between 1 and 100');
        return askForGuess();
    }
    
    // Track the attempt
    gameState.attempts++;
    gameState.previousGuesses.push(numberGuess);
    
    // Check the guess
    if (numberGuess === gameState.targetNumber) {
        gameState.gameActive = false;
        console.log(`\nCongratulations! You won in ${gameState.attempts} attempts!`);
        showGameSummary();
        return askToPlayAgain();
    }
    
    // Provide feedback
    const hint = numberGuess < gameState.targetNumber ? 'higher' : 'lower';
    console.log(`\nTry ${hint}! `);
    
    // Check for game over
    if (gameState.attempts >= gameState.maxAttempts) {
        gameState.gameActive = false;
        console.log(`\nGame Over! The number was ${gameState.targetNumber}`);
        showGameSummary();
        return askToPlayAgain();
    }
    
    console.log(`${gameState.maxAttempts - gameState.attempts} attempts remaining`);
    askForGuess();
}

// Show game statistics
function showGameSummary() {
    console.log('\nGame Summary:');
    console.log(`Target Number: ${gameState.targetNumber}`);
    console.log(`Attempts Made: ${gameState.attempts}`);
    console.log(`Guesses: ${gameState.previousGuesses.join(', ')}`);
}

// Ask for user input
function askForGuess() {
    readline.question('\nEnter your guess: ', (guess) => {
        makeGuess(guess);
    });
}

// Ask if player wants to play again
function askToPlayAgain() {
    readline.question('\nWould you like to play again? (yes/no): ', (answer) => {
        if (answer.toLowerCase().startsWith('y')) {
            startGame();
        } else {
            console.log('Thanks for playing!');
            readline.close();
        }
    });
}

// Start the game
console.log('Welcome to the Number Guessing Game!');
startGame();