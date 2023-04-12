import Character from "./Entity.js";

class Mage extends Character {

    constructor(name, dmg, hp, mana) {
        super(name, dmg, hp)
        this.currentMana = mana
    }

    sayHi() {
        return this.currentName;
    }

}


export default Mage;
