// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// My Solution

function digitize(n) {
    // Convert the number to a string and split it into an array of characters
    var digits = n.toString().split('');
    
    // Reverse the array and convert each element back to a number
    var reversedDigits = digits.reverse().map(Number);
    
    return reversedDigits;
  }