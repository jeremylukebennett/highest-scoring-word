function high(sentence){

    // Converts string input to all lower case letters.
    sentence = sentence.toLowerCase();

    let lettersObject = new Object();
    let currentLetter;

    // Maps each letter of the alphabet to its equivalent numerical value. Puts these mappings in the object 'lettersObject'
    for(i = 1; i <= 26; i++) {
        currentLetter = String.fromCharCode(96+i);
        lettersObject[currentLetter] = i;
    }

    // Splits each word of the string input into separate array elements
    sentenceWords = sentence.split(" ");


    let totalTally = 0;
    let highestWord = "";
    let finalWord = "";
    

    // Initiates a process where each word is split into its component letters, the values of which are tallied up.
    for(i = 0; i < sentenceWords.length; i++) {
        
        let wordLetters = sentenceWords[i].split("");
        // Now wordLetters is an array of each letter in the current word looping through
        let currentTally = 0;
        
        // Tallies the value of each letter, produces a total tally, and compares the total tally to the previous total tally. If the previous total tally is less than the current total tally, the overall total tally is overwritten.
        for(j = 0; j < wordLetters.length; j++) {

            currentTally += lettersObject[wordLetters[j]];

            if(currentTally > totalTally) {
                totalTally = currentTally;
                highestWord = wordLetters;
            }
        }
        
        // If the string input is empty, this sets the return value to be empty (instead of trying to "join" an empty string, which returns an error)
        if(highestWord === "") {
            finalWord = "";
        } else {
            finalWord = highestWord.join("");
        }
        
    }

    return finalWord;
}

high("");