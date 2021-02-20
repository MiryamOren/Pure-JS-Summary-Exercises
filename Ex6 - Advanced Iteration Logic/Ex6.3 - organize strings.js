function longest(str1, str2){
  let arr = [...new Set((str1 + str2).split(''))];
  return arr.sort().join('');
}

let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
console.log(longest(a, b)) // "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
console.log(longest(a, a)); // "abcdefghijklmnopqrstuvwxyz"