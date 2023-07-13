// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// My Solution


function past(h, m, s) {
    const millisecondsPerHour = 60 * 60 * 1000; // Number of milliseconds in an hour
    const millisecondsPerMinute = 60 * 1000; // Number of milliseconds in a minute
    const millisecondsPerSecond = 1000; // Number of milliseconds in a second
  
    const totalMilliseconds =
      h * millisecondsPerHour + m * millisecondsPerMinute + s * millisecondsPerSecond;
    
    return totalMilliseconds;
  }