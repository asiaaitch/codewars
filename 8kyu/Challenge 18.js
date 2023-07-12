// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// My Solution

function strCount(str, letter) {
    let count = 0; // Initialize a counter variable to keep track of occurrences
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        count++; // Increment the count if the character matches the given letter
      }
    }
    
    return count; // Return the final count
  }