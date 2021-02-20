function lastStop(arr){
  let currentPassengers = 0;

  for (let stop = 0; stop < arr.length; stop++){
    currentPassengers += arr[stop][0];
    currentPassengers -= arr[stop][1];
    if (currentPassengers < 0){
      return `Error: in stop ${stop + 1}: Number of passengers can not be negative.`;
    }
  }
  return currentPassengers;
}

// Tests
console.log(lastStop([[2,0],[4,1],[8,5],[0,2],[1,0]])); // 7
console.log(lastStop([[2,0],[4,7],[8,5],[0,2],[1,0]])); // Error