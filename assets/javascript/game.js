


// creats the wins, loses, and guesses
var computerChoice = [];
var wins = 0;
var losses = 0;
var tries = 10;
var guessesLeft = [];
var YourGuesses = [];
var letters = "qwertyuiopasdfghjklzxcvbnm"
var score = [];

//computer picks the letters
var randomletters = letters[Math.floor(Math.random() * letters.length)];
var computerChoice = letters[randomletters];


// user presses a key.
document.onkeyup = function (event) {
        //  keeps up with the keys pressed.
        var tries = event.key;
        // counts the users tries or entries to the game.
        if (tries === computerChoice) {
                wins++;
                tries = 10;
                guessesLeft = [];

        }


        if (tries === 0) {
                losses++;
                guessesLeft = 10;
                tries = [];
        }
     
        if (tries !== letters) {
                tries--;
        }




        //collection of wrong guesses ?? not sure how to code.

        // else if  (tries.push(YourGuesses) 
        // document.getElementById("tries").innerHTML = tries;
        // for (var a = 0; i <z a++) 

        //if (guessesLeft <= 0) {
        // losses++;
        //document.getElementById("losses").innerHTML = losses++;
        //guessesLeft = 10;
        //YourGuesses = [];





        // what the user sees.

        document.write("Wins:");
        document.write("Losses:");
        document.write("Guesses Left:");
        document.write("Your guesses so far:");





}

