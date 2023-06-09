// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// My Solution

function getAverage(marks) {
    // Calculate the sum of all marks
    var sum = marks.reduce(function(total, mark) {
      return total + mark;
    }, 0);
    
    // Calculate the average
    var average = sum / marks.length;
    
    // Round down the average to the nearest integer
    var roundedAverage = Math.floor(average);
    
    return roundedAverage;
  }