// // Building 

// // Write a class Block that creates a block (Duh..)

// Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.


// My solution

class Block{

    constructor([width, length, height]){
    this.width = width
    this.length = length
    this.height = height
    }
    
  getWidth(){
    return this.width
  }
  getLength(){
    return this.length
  }
  
  getHeight(){ 
    return this.height
    }
  
  getVolume(){ 
    return this.length * this.width * this.height
    }
  
  getSurfaceArea(){
    return 2 * this.length * this.width + 2 * this.length * this.height + 2 * this.height * this.width
    } 
  }


  let tower = new Block([2, 4, 6]) 
   