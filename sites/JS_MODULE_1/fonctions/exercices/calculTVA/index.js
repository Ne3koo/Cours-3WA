
const TVA = 19.6;
let montantHT = 15;

function calculTVA(prix, taxe) {
  let a = prix * taxe / 100;
  
  return a;
}

let montantTVA = calculTVA(montantHT, TVA);

console.log(montantTVA);
