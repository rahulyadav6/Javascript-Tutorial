let max = prompt("Enter a maximum number: ");

const random =Math.floor(Math.random() * max)+1

console.log(random);

let guess = prompt(`Guess the random number between 1 to ${max} number:`);

while(true){
    if(guess == "quit"){
        console.log(`Quiting the game.`);
        break;
    }
    if(guess == random){
        console.log(`Congrats you guessed it right number is ${random}`);
        break;
    }else if(guess > random){
        guess = prompt(`Wrong guess! Please try smaller number`);
    }else if(guess < random){
        guess = prompt(`Wrong guess! Please try larger number`);
    }
}
