function findUniq(arr){
  let ordinary;
  if(arr[0] === arr[1] && arr[1] === arr[2]){
    ordinary = arr[0];
  }
  else if(arr[0] !== arr[1] && arr[1] === arr[2]){
    return arr[0]
  }
  else{
    ordinary = arr[0];
  }

  for(let i = 0; i < arr.length; i++){
    if (arr[i] !== ordinary){
      return arr[i];
    }
  }
}
// Tests
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([ 0, 0, 0.55, 0, 0 ])); // 0.55
console.log(findUniq([ 3, 2, 3, 3, 3 ])); // 2
console.log(findUniq([ 4, 8, 8, 8, 8 ])); //4

