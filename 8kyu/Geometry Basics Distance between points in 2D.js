// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.

// Tests compare expected result and actual answer with tolerance of 1e-6.

// My Solution

function distanceBetweenPoints(a, b) {
    let a1 = Math.abs(a.x - b.x);
    let b1 = Math.abs(a.y - b.y);
    let a2 = Math.pow(a1,2);
    let b2 = Math.pow(b1,2);
    let result = Math.sqrt(a2 + b2);
    return result;
  }