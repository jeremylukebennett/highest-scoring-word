function high(sentence){


    sentence = sentence.toLowerCase();

    let lettersObject = new Object();
    let currentLetter;

    for(i = 1; i <= 26; i++) {
        currentLetter = String.fromCharCode(96+i);
        lettersObject[currentLetter] = i;
    }

    // console.log('lettersObject',lettersObject);
    console.log("this should be what? ", sentence.split(" "));
    console.log('lettersObject',lettersObject);

    sentenceWords = sentence.split(" ");
    console.log('sentenceWords',sentenceWords);
    let totalTally = 0;
    let highestWord;
    
    for(i = 0; i < sentenceWords.length; i++) {
        
        let wordLetters = sentenceWords[i].split("");
        // Now wordLetters is an array of each letter in the current word looping through
        let currentTally = 0;
        
        for(j = 0; j < wordLetters.length; j++) {
            

            console.log("The current word is: ", wordLetters);
            console.log("Letter ", wordLetters[j], " = " , lettersObject[wordLetters[j]]);

            currentTally += lettersObject[wordLetters[j]];

            // totalTally += lettersObject[wordLetters[j]];

            console.log('currentTally',currentTally);
            if(currentTally > totalTally) {
                totalTally = currentTally;
                highestWord = wordLetters;
            }
        }

        console.log('totalTally',totalTally);
        
        wordLetters = wordLetters.join("");
        
        console.log('Highest word is: ',wordLetters);
        
    }
    

    // Now I need to break up each word in the string, then break up each letter in each word, totalTally up its value and return the highest.








}

high("Here is another");