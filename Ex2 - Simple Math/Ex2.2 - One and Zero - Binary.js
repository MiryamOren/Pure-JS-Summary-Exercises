function binaryToDecimal(arr){
  let decimal = 0;
  for(let i = 0; i < arr.length; i++){
    decimal += arr[i]*Math.pow(2, arr.length-1-i);
  }
  return decimal;
}

// Tests

console.log(binaryToDecimal([1, 1, 1, 0, 0, 1])); // 57
console.log(binaryToDecimal([1, 0, 0, 0, 1, 1])); // 35
console.log(binaryToDecimal([0, 0, 0, 1])); // 1
console.log(binaryToDecimal([0, 0, 1, 0])); // 2
console.log(binaryToDecimal([0, 1, 0, 1]));  // 5
console.log(binaryToDecimal([1, 0, 0, 1])); // 9
console.log(binaryToDecimal([0, 0, 1, 0]));  // 2
console.log(binaryToDecimal([0, 1, 1, 0])); // 6
console.log(binaryToDecimal([1, 1, 1, 1])); // 15
console.log(binaryToDecimal([1, 0, 1, 1])); // 11
