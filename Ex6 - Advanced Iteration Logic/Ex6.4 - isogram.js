function isIsogram(str){
  let occurrences = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++){
    if (occurrences[str[i]]){
      return false;
    } else{
      occurrences[str[i]] = 1;
    }
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false // -- ignore letter case