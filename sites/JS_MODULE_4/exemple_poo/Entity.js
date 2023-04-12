import Game from './Game.js'

class Entity { // nom de la classe commence par une majuscule

    constructor(name, dmg, hp) { //constructeur permet d'associer les valeurs à nos attributs
        //la variable est disponible dans tout le contexte de la classe grâce au mot clef this
        console.log('lancement constructeur')
        this.currentName = name;
        this.currentDamg = dmg;
        this.currentHp = hp;
    }

    saluer() { // une fonction dans une classe s'appelle une méthode
        console.log(`Bonjour, je mappelle ${this.currentName}, j'ai ${this.currentHp}HP et j'ai ${this.currentDamg} de force`);
    }

    attack(target) {
        // la méthode static peut-être utilisée n'importe ou sans avoir besoin de créer une nouvelle instance
        //Game.playSound('file.mp3');
        target.currentHp = target.currentHp - this.currentDamg;
        const hpElem = document.getElementById('hp');
        hpElem.style.width = target.currentHp + "%";
        console.log(target.currentHp);
    }
}


export default Entity;
