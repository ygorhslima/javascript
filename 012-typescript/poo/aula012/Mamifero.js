import { Animal } from "./Animal.js";
export class Mamifero extends Animal {
    corPelo = "";
    // Getters
    getCorPelo() {
        return this.corPelo;
    }
    // Setters
    setCorPelo(corPelo) {
        this.corPelo = corPelo;
    }
    locomover() {
        console.log("correndo");
    }
    alimentar() {
        console.log("mamando");
    }
    emitirSom() {
        console.log("som de mamífero");
    }
}
