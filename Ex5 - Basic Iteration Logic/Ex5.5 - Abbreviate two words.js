function toAcronyms(fullName){
  let arr = fullName.split(' ');
  return (arr[0][0] + '.' + arr[1][0]).toUpperCase();
}

console.log(toAcronyms('Sam Harris')); // S.H
console.log(toAcronyms('Patrick feeney')); // P.F6.6