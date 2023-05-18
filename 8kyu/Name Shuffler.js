// Write a function that returns a string in which firstname is swapped with last name.

// My Solution:


function nameShuffler(str) {
    const names = str.split(" ");
    const reversedNames = names.reverse();
    const shuffledName = reversedNames.join(" ");
    return shuffledName;
  }