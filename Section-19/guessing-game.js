let max = parseInt(prompt("Enter the maximum number:"));

while (!max) {
    max = parseInt(prompt("Please enter a valid maximum number:"));
}

const target = Math.floor(Math.random() * max) + 1;
console.log(target);

let guess = parseInt(prompt("Make your first guess!"));
let attempts = 1;

while (parseInt(guess) !== target) {
    if(guess === 'q') {
        break;
    }

    attempts++;
    if (guess > target) {
        guess = prompt("Too high! Enter a new guess (or enter 'q' to quit):");
    }   else {
        guess = prompt("Too low! Enter a new guess (or enter 'q' to quit):");
    }
}
console.log("Congrats, you win!")
console.log(`You got it! It took you ${attempts} guesses!`)

if (guess === 'q'){
    console.log("OK, YOU QUIT!")
}