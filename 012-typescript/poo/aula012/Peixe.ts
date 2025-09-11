import { Animal } from "./Animal.js";

export class Peixe extends Animal{
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
        console.log("nadando")
    }
    public alimentar(): void {
        console.log("comendo substâncias");    
    }
    public emitirSom(): void {
        console.log("Peixe não faz som");
    }
    public soltarBolhas():void{
        console.log("soltou uma bolha");
    }
}