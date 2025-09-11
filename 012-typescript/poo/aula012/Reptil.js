import { Animal } from "./Animal.js";
export class Reptil extends Animal {
    corEscama = "";
    // Getters
    getCorEscama() {
        return this.corEscama;
    }
    // Setters
    setCorEscama(corEscama) {
        this.corEscama = corEscama;
    }
    locomover() {
        console.log("rastejando");
    }
    alimentar() {
        console.log("comendo vegetais");
    }
    emitirSom() {
        console.log("som de réptil");
    }
}
