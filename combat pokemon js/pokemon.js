class Entity {
    constructor(name, hp, damages) {
      this.name = name;
      this.hp = hp;
      this.damages = damages;
    }
  
    attack(target) {
      target.hp -= this.damages;
    }
  }
  
  class Pikachu extends Entity {
    constructor(name, hp, damages, xp, lvl) {
      super(name, hp, damages);
      this.xp = xp;
      this.lvl = lvl;
      this.pokedex_num = 25;
      this.type = "Electric";
    }
  
    thunderbolt(target) {
      console.log(this.name + " utilise Thunderbolt !");
      target.hp -= this.damages + Math.floor(Math.random() * 10);
    }
  
    quick_attack(target) {
      console.log(this.name + " utilise Quick Attack !");
      target.hp -= this.damages + Math.floor(Math.random() * 5);
    }
  
    levelUp() {
      this.xp = 0;
      this.lvl++;
      this.hp += 10;
      this.damages += 5;
    }
  }
  
  class Dracaufeu extends Entity {
    constructor(name, hp, damages, xp, lvl) {
      super(name, hp, damages);
      this.xp = xp;
      this.lvl = lvl;
      this.pokedex_num = 6;
      this.type = "Fire/Flying";
    }
  
    flamethrower(target) {
      console.log(this.name + " utilise Flamethrower !");
      target.hp -= this.damages + Math.floor(Math.random() * 15);
    }
  
    dragon_claw(target) {
      console.log(this.name + " utilise Dragon Claw !");
      target.hp -= this.damages + Math.floor(Math.random() * 10);
    }
  
    levelUp() {
      this.xp = 0;
      this.lvl++;
      this.hp += 15;
      this.damages += 8;
    }
  }
  
  // Création des personnages
  const pikachu = new Pikachu("Pikachu", 50, 10, 0, 1);
  const dracaufeu = new Dracaufeu("Dracaufeu", 80, 15, 0, 1);
  
  // Déroulement du combat
  console.log("Début du combat entre " + pikachu.name + " et " + dracaufeu.name);
  while (pikachu.hp > 0 && dracaufeu.hp > 0) {
    // Pikachu attaque
    if(Math.floor(Math.random() * 2) == 0) {
        pikachu.thunderbolt(dracaufeu);
    } else {
        pikachu.quick_attack(dracaufeu);
    }

    console.log(dracaufeu.name + " a " + dracaufeu.hp + " PV restants");
    if (dracaufeu.hp <= 0) {
      console.log(dracaufeu.name + " est mort");
      pikachu.xp += 50;
      pikachu.levelUp();
      break;
    }
    
    // Dracaufeu attaque
    if(Math.floor(Math.random() * 2) == 0) {
        dracaufeu.flamethrower(pikachu);
    } else {
        dracaufeu.dragon_claw(pikachu);
    }

    console.log(pikachu.name + " a " + pikachu.hp + " PV restants");
    if (pikachu.hp <= 0) {
        console.log(pikachu.name + " est mort");
        dracaufeu.xp += 50;
        dracaufeu.levelUp();
        break;
    }
}
// Affichage du vainqueur
if (pikachu.hp > 0) {
    console.log(pikachu.name + " a gagné ! et est passé au niveau" + pikachu.lvl );
} else {
    console.log(dracaufeu.name + " a gagné ! et est passé au niveau " + dracaufeu.lvl);
}