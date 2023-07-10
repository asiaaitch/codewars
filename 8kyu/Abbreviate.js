// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// My Solution

function abbrevName(name) {
    const nameArray = name.split(' '); // Split the name into an array of words
    const initials = nameArray.map(word => word[0].toUpperCase()); // Extract the first character of each word and capitalize it
    return initials.join('.'); // Join the initials with a dot in between
  }