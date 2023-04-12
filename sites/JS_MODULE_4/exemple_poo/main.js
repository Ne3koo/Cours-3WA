import Entity from "./Entity.js";
import Mage from "./Mage.js";

const atkBtn = document.getElementById('atk');

// injection d'une méthode à la volée dans un prototype à la classe Mage
Mage.prototype.calc = function calc(n1, n2) {
    return n1 + n2;
}

const warrior = new Entity('Aragorn', 10, 100); // instanciation avec le mot clef new  + les params
const mage = new Mage('Gandalf', 10, 100, 200); // instanciation avec le mot clef new  + les params

atkBtn.addEventListener('click', function() {
    warrior.attack(mage);
})
