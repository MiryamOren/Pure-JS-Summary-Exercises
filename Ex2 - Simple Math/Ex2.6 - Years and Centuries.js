function centuryFromYear(year){
  year = year.toString();
  let century = parseInt(year[0] + year[1]);
  if (year[2] !== '0' || year[3] !== '0'){
    century += 1;
  }

  return century;
}

// Tests
console.log(centuryFromYear(1705)); // (18)
console.log(centuryFromYear( 1900)); // (19)
console.log(centuryFromYear(1601)); // (17)
console.log(centuryFromYear(2000)); // (20)