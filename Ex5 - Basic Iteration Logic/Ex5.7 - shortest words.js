function shortestWordLength(str){
  arr = str.split(' ');
  arr.sort(function(a, b){
    return a.length - b.length;
  });
  return arr[0].length;
}

console.log(shortestWordLength('12 123 2 12345'));