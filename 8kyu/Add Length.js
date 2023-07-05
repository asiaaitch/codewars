// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// My Solution

function addLength(str) {
    const words = str.split(' ');
    const result = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const length = word.length;
      const wordWithLength = `${word} ${length}`;
      result.push(wordWithLength);
    }
  
    return result;
  }