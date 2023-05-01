// Create a method to see whether the string is ALL CAPS.

// My Solution

String.prototype.isUpperCase = function(){
    if(this.toString() == this.toUpperCase()){
      return true;
    } else{
      return false;
    }
  }