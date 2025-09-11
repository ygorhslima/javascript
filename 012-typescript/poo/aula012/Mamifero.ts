import { Animal } from "./Animal.js";

export class Mamifero extends Animal{
    protected corPelo:string="";

    // Getters
    public getCorPelo(): string {
        return this.corPelo;
    }

    // Setters
    public setCorPelo(corPelo: string): void {
        this.corPelo = corPelo;
    }

    public locomover(): void {
        console.log("correndo");
    }
    public alimentar(): void {
        console.log("mamando");
    }
    public emitirSom(): void {
        console.log("som de mamífero");
    }
}