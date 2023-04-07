// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// My Solution

function uniTotal (string) {
  let sum = 0;
  if( string.length === 0 ){
    return 0;
  } else {
    for( x in string ){
      sum += string.charCodeAt(x)
    }
  }
  return sum;
}