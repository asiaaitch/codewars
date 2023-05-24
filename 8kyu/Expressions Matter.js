// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)

// My Solution

function expressionMatter(a, b, c) {
    const option1 = a + b + c; // a + b + c
    const option2 = a * b * c; // a * b * c
    const option3 = a * (b + c); // a * (b + c)
    const option4 = (a + b) * c; // (a + b) * c
    const option5 = a * b + c; // a * b + c
    const option6 = a + b * c; // a + b * c
  
    return Math.max(option1, option2, option3, option4, option5, option6);
  }