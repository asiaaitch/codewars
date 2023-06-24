// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// My Solution

function position(letter) {
    const asciiValueOfA = 'a'.charCodeAt(0);
    const position = letter.charCodeAt(0) - asciiValueOfA + 1;
    
    return "Position of alphabet: " + position;
  }