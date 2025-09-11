import { Animal } from "./Animal.js";

export class Ave extends Animal{
    private corPena:string="";

    // Getters
    public getCorPena(): string {
        return this.corPena;
    }

    // Setters
    public setCorPena(corPena: string): void {
        this.corPena = corPena;
    }
    public locomover(): void {
        console.log("voando");
    }
    public alimentar(): void {
        console.log("comendo frutas");
    }
    public emitirSom(): void {
        console.log("som da ave");
    }
    public fazerNinho():void{
        console.log("fazendo ninho");
    }
}