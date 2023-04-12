
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

let nbreATrouver = Math.ceil(Math.random() * 100) + 9;
let essaisRestants = 10;
let saisieNombre;

do {
  saisieNombre = Number(
    prompt('Devine le nombre (entre 10 et 100)')
  );

  if (isNaN(saisieNombre)) {
    continue;
  }

  if (saisieNombre === nbreATrouver) {
    alert('Gagné ! Il a fallu ' + essaisRestants + ' coups !');
    break;
  }

  essaisRestants--;

  if (saisieNombre < nbreATrouver) {
    alert('Plus grand, essais restants ' + essaisRestants);
  }
  if (saisieNombre > nbreATrouver) {
    alert('Plus petit, essais restants ' + essaisRestants);
  }

  if (essaisRestants <= 0) {
    alert('Perdu, plus d\'essai');
    break;
  }

} while(saisieNombre !== nbreATrouver);
