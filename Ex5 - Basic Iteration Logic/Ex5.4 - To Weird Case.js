function toWeirdCase(str){
  res = '';
  let arr = str.split(' ');
  arr.forEach(word => {
    for (let i = 0; i < word.length; i++){
      if (i % 2 === 0){
        res += word[i].toUpperCase();
      }
      else{
        res += word[i].toLowerCase();
      }
    }
    res += ' ';
  });

  return res;
}

console.log(toWeirdCase( "String" ));//=> returns "StRiNg"
console.log(toWeirdCase( "Weird string case" ));//=> returns "WeIrD StRiNg CaSe"
