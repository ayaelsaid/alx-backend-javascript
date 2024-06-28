function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const keyOne =`income-${getCurrentYear()}`;
  const keyTwo = `gdp-${getCurrentYear()}`;
  const keyThree = `capita-${getCurrentYear()}`;
  const budget = {
     [keyOne]: income,
     [keyTwo]: gdp,
     [keyThree]: capita
  };


  return budget;
}
