function sumToN(n){
  sum = 0;
  for(let i = 1; i <= n; i++){
    sum += i;
  }

  return sum;
}

// Tests
console.log(sumToN(2)); // 3
console.log(sumToN(8)); // 36
console.log(sumToN(1)); // 1