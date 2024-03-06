const currentCity = "Paris";
const compCity = "Barcelona";
const currentRent = 1200;
const compRent = 940;
const isMoreExpensitive = currentRent > compRent;
const comparisonLabel= currentCity + " É mais caro: "+ isMoreExpensitive;
console.log(comparisonLabel);
const difference = currentRent - compRent
const differenceLebal = "Diferença de aluguel: &euro " + difference;
console.log(differenceLebal);
document.getElementById("city1").innerHTML = currentCity + " &euro; " + currentRent;
document.getElementById("city2").innerHTML = compCity + " &euro; " + compRent;
document.getElementById("comparison").innerHTML = comparisonLabel;
document.getElementById("difference").innerHTML = differenceLebal;