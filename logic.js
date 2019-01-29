console.log("This is linked correctly");
//words to be guessed
wordList = ["flower", "sword", "shield", "cake", "treasure",];
//set global variables
wordToGuess = document.getElementById("wordToGuess");
imgchange = document.getElementById("myimg");
wins = document.getElementById("wins");
guesses = document.getElementById("gRemaining");
guessed = document.getElementById("guessed");
duplicate = false;
word = 0;
wordarray = [];
guessesLeft = 0;
winsvalue = 0;
matched = false;
guessedLetter = "";

//log keystrokes
document.onkeyup = function(event) {
    console.log('I stroke a key', event.key);
    //randomly pick a word
    let pickWord = function(){
        if (word == 0)
        {   
            guessedLetter = "";
            document.getElementById("myimg").src = "assets/images/template.jpg";
            //set guesses limit
            wordToGuess.innerText = "";
            guessesLeft = 10;
            guesses.innerText = "Guesses Remaining:" + guessesLeft;
            


            //randomly generate a word from the array wordList
            randomNum = Math.floor(Math.random() * wordList.length)
            word = wordList[randomNum];

            //add guess bar length
            for(let i = 0; i < word.length; i++)
            {   
                wordarray.push("_");
                wordToGuess.innerText += "_"
            }
            console.log(word);
        }
    }
    pickWord();
    console.log(wordList[0].length);
  
    //keystroke responses
    //check if already guessed that letter
   
    for(let i = 0; i < guessedLetter.length; i++){
        if (guessedLetter[i] !== event.key){
            duplicate = false;
            console.log(duplicate);
        }
    }
    for(let i = 0; i < guessedLetter.length; i++){
        if (guessedLetter[i] == event.key){
            duplicate = true;
            console.log(duplicate);
        }
    }
    //check if keystroke matches a letter in the word
    for(let i = 0; i < word.length; i++)
    {
        if(event.key === word[i])
        {
            wordarray[i] = event.key;
            updateWord = wordarray.join('');
            wordToGuess.innerText = updateWord;
            /// Reset IF YOU WIN
            if(updateWord === word){
                console.log(word)

                guessed.innerText = "Incorrect Letters Guessed: "
                guesses.innerText = "Guesses Remaining:"
                winsvalue = winsvalue + 1;
                wins.innerText = "Wins: " + winsvalue;
                wordarray = [];
                console.log(wins);
                wordToGuess.innerText = "You Win press any key for new word";

                if(word == "flower"){document.getElementById("myimg").src = "assets/images/flower.jpg";}
                if(word == "cake"){document.getElementById("myimg").src = "assets/images/cake.jpg";}
                if(word == "shield"){document.getElementById("myimg").src = "assets/images/shield.jpg";}
                if(word == "sword"){document.getElementById("myimg").src = "assets/images/sword.jpg";}
                if(word == "treasure"){document.getElementById("myimg").src = "assets/images/treasure.jpg";}
                document.getElementById('winsound').play()
                word = 0;
            }
            matched = true;
        }else if (i == (word.length - 1) && matched == false && duplicate == false){
            ////IF you LOSE
            if (guessesLeft < 2){
                guessed.innerText = "Incorrect Letters Guessed: "
                guesses.innerText = "Guesses Remaining:"
                guessedLetter = "";
                word = 0;
                wordarray = [];
                console.log(wins);
                document.getElementById('losesound').play()

                wordToGuess.innerText = "You lose, press any key to try again";
            }
            guessedLetter += event.key;
            guessesLeft -= 1;
            guesses.innerText = "Guesses Remaining:" + guessesLeft;
            guessed.innerText = "Incorrect Letters Guessed: " + guessedLetter;
            matched = false;
            console.log(guessedLetter);
        }else if (i == (word.length - 1)){
            matched = false;
        }
        console.log(i);
    }
};

