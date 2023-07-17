// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// My Solution

function powersOfTwo(n) {
    const powers = [];
    for (let exponent = 0; exponent <= n; exponent++) {
      powers.push(Math.pow(2, exponent));
    }
    return powers;
  }