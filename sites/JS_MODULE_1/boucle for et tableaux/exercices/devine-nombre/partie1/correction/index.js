
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

let nbreATrouver = Math.ceil(Math.random() * 100) + 9;
let saisieNombre;

do {
  saisieNombre = Number(
    prompt("Devine le nombre (entre 10 et 100)")
  );

  if (isNaN(saisieNombre)) {
    continue;
  }
  if (saisieNombre < nbreATrouver) {
    alert("Plus grand");
  }
  if (saisieNombre > nbreATrouver) {
    alert("Plus petit");
  }
} while(saisieNombre !== nbreATrouver)

alert("Gagné !");
