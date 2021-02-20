function sumOflowest(arr){
  arr.sort(function(a, b){return a-b}); 
  return arr[0] + arr[1];
}

console.log(sumOflowest([19, 5, 42, 2, 77]));
console.log(sumOflowest([10, 343445353, 3453445, 3453545353453]));