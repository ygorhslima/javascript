import { Aluno } from "./Aluno.js";

export class Bolsista extends Aluno{
    private bolsa:number=0;

    // Getters
    public getBolsa(): number {
        return this.bolsa;
    }

    // Setters
    public setBolsa(bolsa: number): void {
        this.bolsa = bolsa;
    }

    public renovarBolsa():void{
        console.log(`Renovando bolsa de ${this.nome}`)
    
    }

    public pagarMensal(): void {
        console.log(`${this.nome} é bolsista! Pagamento facilitado`);
    }
}