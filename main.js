function high(sentence){


    sentence = sentence.toLowerCase();

    let lettersObject = new Object();
    let currentLetter;

    for(i = 1; i <= 26; i++) {
        currentLetter = String.fromCharCode(96+i);
        lettersObject[currentLetter] = i;
    }

    // console.log('lettersObject',lettersObject);
    // console.log(sentence.split(" "));
    console.log('lettersObject',lettersObject);

    sentenceWords = sentence.split(" ");
        console.log('sentenceWords',sentenceWords);

        for(i = 0; i < sentenceWords.length; i++) {

            let wordLetters = sentenceWords[i].split("");
            console.log('wordLetters',wordLetters[i]);

            console.log("Whats this? " + lettersObject[wordLetters[i]])


        }


    // Now I need to break up each word in the string, then break up each letter in each word, tally up its value and return the highest.








}

high("This is a test");