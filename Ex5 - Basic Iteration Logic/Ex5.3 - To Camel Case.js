function toCamelCase(str){
  let camelCase = '';
  let arr = str.split('-').join('_').split('_');
  arr.forEach(word => {
    camelCase += word[0].toUpperCase();
    camelCase += word.slice(1);
  });

  return camelCase;
}

console.log(toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // returns "TheStealthWarrior"
