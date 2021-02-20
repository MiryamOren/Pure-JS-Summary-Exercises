function findNextSquare(num){
  if (!Number.isInteger(Math.sqrt(num))){
    return -1;
  }

  let nextPerfectSquare = num + 1;
  while (!Number.isInteger(Math.sqrt(nextPerfectSquare))){
    nextPerfectSquare++;
  }
  return nextPerfectSquare;
}

// Tests
console.log(findNextSquare(121)); // returns 144
console.log(findNextSquare(625)); // returns 676
console.log(findNextSquare(114)); // returns -1 since 114 is not a perfect