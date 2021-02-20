function basicOp(operator, num1, num2){
  str = num1.toString() + operator + num2.toString();
  return eval(str);
}

// Tests
console.log(basicOp('-', 15, 18)); // Output: -3
console.log(basicOp('*', 5, 5)); // Output: 25
console.log(basicOp('/', 49, 7)); // Output: 7