import { Aluno } from "./Aluno.js";
export class Bolsista extends Aluno {
    bolsa = 0;
    // Getters
    getBolsa() {
        return this.bolsa;
    }
    // Setters
    setBolsa(bolsa) {
        this.bolsa = bolsa;
    }
    renovarBolsa() {
        console.log(`Renovando bolsa de ${this.nome}`);
    }
    pagarMensal() {
        console.log(`${this.nome} é bolsista! Pagamento facilitado`);
    }
}
