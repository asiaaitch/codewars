// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

// My Solution

function isPalindrome(x) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedString = x.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare characters from beginning and end
    for (let i = 0; i < Math.floor(cleanedString.length / 2); i++) {
      if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
        return false; // Characters don't match, not a palindrome
      }
    }
    
    return true; // All characters matched, it's a palindrome
  }