import { Animal } from "./Animal.js";
export class Ave extends Animal {
    corPena = "";
    // Getters
    getCorPena() {
        return this.corPena;
    }
    // Setters
    setCorPena(corPena) {
        this.corPena = corPena;
    }
    locomover() {
        console.log("voando");
    }
    alimentar() {
        console.log("comendo frutas");
    }
    emitirSom() {
        console.log("som da ave");
    }
    fazerNinho() {
        console.log("fazendo ninho");
    }
}
