// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// My Solution

function peopleWithAgeDrink(old) {
    if (old <= 13){
      return 'drink toddy'
    } if (old > 13 && old <= 17){
      return 'drink coke'
    } else if (old > 17 && old <= 20){
      return 'drink beer'
    } else {
      return 'drink whisky'
    }
    };
    