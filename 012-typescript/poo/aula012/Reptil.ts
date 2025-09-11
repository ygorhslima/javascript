import { Animal } from "./Animal.js";

export class Reptil extends Animal{
    private corEscama:string="";

    // Getters
    public getCorEscama(): string {
        return this.corEscama;
    }
    
    // Setters
    public setCorEscama(corEscama: string): void {
        this.corEscama = corEscama;
    }

    public locomover(): void {
        console.log("rastejando");
    }
    public alimentar(): void {
        console.log("comendo vegetais");
    }
    public emitirSom(): void {
        console.log("som de réptil");
    }

}