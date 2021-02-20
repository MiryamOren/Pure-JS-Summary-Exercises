function duplicates(str){
  let occurrences = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++){
    if (occurrences[str[i]]){
      occurrences[str[i]] += 1;
    }else{
      occurrences[str[i]] = 1;
    }
  }

  let res = 0;
  Object.values(occurrences).forEach(value => {
    if (value > 1){
      res++;
    }
  });

  return res;
}


console.log(duplicates("abcde")); // 0 # no characters repeats more than once
console.log(duplicates("aabbcde")); // 2 # 'a' and 'b'
console.log(duplicates("aabBcde")); // 2 # 'a' occurs twice and 'b' twice (duplicates(`b` and `B`)
console.log(duplicates("indivisibility")); // 1 # 'i' occurs six times
console.log(duplicates("Indivisibilities")); // 2 # 'i' occurs seven times and 's' occurs twice
console.log(duplicates("aA11")); // 2 # 'a' and '1'
console.log(duplicates("ABBA")); // 2 # 'A' and 'B' each occur twice
