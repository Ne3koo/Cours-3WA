let x;
do {
    x = window.prompt("Premier nombre :");
} while(isNaN(x));

let op;
do {
    op = window.prompt("Entrer un opérateur");
} while(op !== "+" && op !== "/" && op !== "+" && op !== "-");

let y;
do {
    y = window.prompt("Second nombre :");
} while(isNaN(y));

const textFormula = x + " " + op + " " + y;
document.write("Calcul : " + textFormula);
document.write("<br />");
document.write("<strong>Résultat :</strong> ")

let result;
switch(op) {
    case '+':
        result = Number(x) + Number(y);
        break;
    case '*':
        result = Number(x) * Number(y);
        break;
    case '-':
        result = Number(x) - Number(y);
        break;
    case '/':
        result = Number(x) / Number(y);
        break;
    default:
        document.write('Opérateur non géré');
}
document.write(result);
