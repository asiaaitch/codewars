// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

// To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

// My Solution

function countSquares(cuts) {
    if (cuts === 0) {
      return 1; // Only the initial solid cube
    }
  
    // Calculate the number of smaller cubes along each dimension
    const smallerCubesPerDimension = cuts + 1;
  
    // Calculate the total number of smaller cubes
    const totalSmallerCubes = smallerCubesPerDimension ** 3;
  
    // Subtract the number of cubes without any red face (interior cubes)
    const interiorCubes = (cuts - 1) ** 3;
  
    // Return the number of cubes with at least one red face
    return totalSmallerCubes - interiorCubes;
  }