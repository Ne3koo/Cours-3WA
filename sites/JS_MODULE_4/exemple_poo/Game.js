class Game {
// une méthode statique peut être utilisée n'importe ou 
//n'importe quand sans avoir besoin d'instancier la class à chaque fois
//==>voir class Entity
    static playSound(soundUrl) {
        const audio = new Audio(soundUrl);
        audio.play();
    }
}

export default Game;
