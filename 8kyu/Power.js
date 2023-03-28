// DESCRIPTION:
// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

// My Solution

function numberToPower(number, power) {
    if (power === 0) return 1;
    return numberToPower(number, power - 1) * number;
  }