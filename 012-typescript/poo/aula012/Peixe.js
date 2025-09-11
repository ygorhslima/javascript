import { Animal } from "./Animal.js";
export class Peixe extends Animal {
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
        console.log("nadando");
    }
    alimentar() {
        console.log("comendo substâncias");
    }
    emitirSom() {
        console.log("Peixe não faz som");
    }
    soltarBolhas() {
        console.log("soltou uma bolha");
    }
}
