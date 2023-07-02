// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// My Solution


function mango(quantity, price) {
    // Calculate the number of mangoes eligible for the offer
    const eligibleMangoes = Math.floor(quantity / 3) * 2;
  
    // Calculate the remaining mangoes outside the offer
    const remainingMangoes = quantity % 3;
  
    // Calculate the total cost
    const totalCost = (eligibleMangoes + remainingMangoes) * price;
  
    return totalCost;
  }
  