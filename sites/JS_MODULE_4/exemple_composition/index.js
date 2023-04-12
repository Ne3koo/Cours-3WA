class Adresse {
    constructor(rue, ville, codePostal) {
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }
}

class Contact {
    constructor(email, telephone) {
        this.email = email;
        this.telephone = telephone;
    }
}

class Personne {
    constructor(nom, prenom, adresse, contact) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.contact = contact;
    }

    afficherAdresse() {
        console.log(this.adresse.rue + ", " + this.adresse.ville + ", " + this.adresse.codePostal);
    }

    afficherContact() {
        console.log("Email: " + this.contact.email + ", Téléphone: " + this.contact.telephone);
    }
}

let adresse = new Adresse("2 rue des champs", "Nantes", "44000");
let contact = new Contact("johndoe@gmail.com", "0660066006");
// injection d'un objet dans un autre objet. C'est la composition.
// Elle permet d'avoir accès au code d'une autre classe étroitement liée mais pas assez pour avoir un héritage direct
let personne = new Personne("Doe", "John", adresse, contact);

personne.afficherAdresse();
personne.afficherContact();

//exemple 2
console.log("*********EXEMPLE 2*********")

class Vehicule {
    // Tout véhicule à besoin d'un moteur pour fonctionner. Mais ça n'a pas de sens que le moteur hérite de véhicule
    // Une voiture ou une moto peut hériter de véhicule mais pas un moteur
    // On va donc utiliser la composition pour injecter notre moteur dans notre véhicule (voir plus bas)
    constructor(nbRoues, couleur, motor) {
        this.nbRoues = nbRoues;
        this.couleur = couleur;
        this.motor = motor;
    }

    rouler() {
        this.motor.allumage()
        if (this.motor.demarrer === true) {
            return 'le véhicule roule';
        }
        else {
            return 'veuillez démarrer le moteur'
        }
    }
}
// Voiture hérite de Vehicule
class Voiture extends Vehicule {
    constructor(nbRoues, couleur, motor) {
        super(nbRoues, couleur, motor);
    }


}
// Moto hérite de Vehicule
class Moto extends Vehicule {
    constructor(nbRoues, couleur, motor) {
        super(nbRoues, couleur, motor);
    }
}

// Moteur doit être une class car il à un fonctionnement complexe
// Il ne peut pas hériter de véhicule. Un moteur ça ne roule pas, ça n'a pas de couleur ! 
class Moteur {
    constructor() {
        this.demarrer = false;
    }

    allumage() {
        this.demarrer = true;
    }

}
// Création d'un moteur
const moteur = new Moteur();
// Injection du moteur dans la voiture
const voiture = new Voiture(4, 'jaune', moteur)
console.log(voiture.rouler());
