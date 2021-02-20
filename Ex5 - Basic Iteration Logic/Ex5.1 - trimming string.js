function trimmingString(str){
  let lastIndex = str.length - 1;
  return str.slice(1, lastIndex);
}

console.log(trimmingString("blablabla"));
