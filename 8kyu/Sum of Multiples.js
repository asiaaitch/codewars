// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples

// My Solution

function sumMul(n, m) {
  let sum = 0;
  
  for (let i = 0; i < m; i++) {
    if (i % n === 0) {
      sum += i;
    }
  }
  
  if (sum === 0) {
    return 'INVALID';
  }
  
  return sum;
}
