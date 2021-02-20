function nb_year(p0, percent, aug, p){
  let newYearPopulation = p0;
  years = 0;
  while(newYearPopulation < p){
    newYearPopulation += newYearPopulation * (percent /100) + aug;
    years++;
  }

  return years;
}

// Tests
console.log(nb_year(1500, 5, 100, 5000)); // 15
console.log(nb_year(1500000, 2.5, 10000, 2000000)); // 10
