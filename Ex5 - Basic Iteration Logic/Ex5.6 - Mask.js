function maskify(pass){
  if(pass.length > 4){
    return '#'.repeat(pass.length - 4) + pass.slice(pass.length - 4);
  }
  return pass;
}
console.log(maskify("4556364607935616")); // "############5616"
console.log(maskify( "64607935616")); // "#######5616"
console.log(maskify( "1")); // "1"
console.log(maskify( "")); // ""
console.log(maskify("Skippy")); // "##ippy"
console.log(maskify("Nananananananananananananananana Batman!")); //"####################################man!"