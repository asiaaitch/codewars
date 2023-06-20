// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// My Solution


function betterThanAverage(classPoints, yourPoints) {
    // Calculate the average of the class points
    var sum = 0;
    for (var i = 0; i < classPoints.length; i++) {
      sum += classPoints[i];
    }
    var average = sum / classPoints.length;
  
    // Compare your score with the average
    if (yourPoints > average) {
      return true;
    } else {
      return false;
    }
  }