const numberOne = window.prompt("Entrez le premier nombre");
const operator = window.prompt("Entrez l'opérateur");
const numberTwo = window.prompt("Entrez le second nombre");
let result;
if (!isNaN(numberOne) && !isNaN(numberTwo)) {
  if (operator === "+" || operator === "-" || operator === "/" ||operator === "*") {
    if (operator === "+") {
      result = Number(numberOne) + Number(numberTwo);
    } else if (operator === "-") {
      result = Number(numberOne) - Number(numberTwo);
    } else if (operator === "*") {
      result = Number(numberOne) * Number(numberTwo);
    } else if (operator === "/") {
      result = Number(numberOne) / Number(numberTwo);
    }
    document.write(String(result));
  } else {
    document.write("l'opérateur n'est pas valide");
  }
} else {
    document.write("attention, veuillez rentrer un nombre");
}