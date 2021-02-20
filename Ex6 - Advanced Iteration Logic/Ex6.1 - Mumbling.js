function accum(str){
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i);
  }
  return arr.join('-');
}

console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); // "C-Ww-Aaa-Tttt"
