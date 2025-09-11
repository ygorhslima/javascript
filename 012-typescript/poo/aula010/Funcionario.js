import { Pessoa } from "./Pessoa.js";
export class Funcionario extends Pessoa {
    setor = "";
    trabalhando = false;
    // Getters
    getSetor() {
        return this.setor;
    }
    getTrabalhando() {
        return this.trabalhando;
    }
    // Setters
    setSetor(setor) {
        this.setor = setor;
    }
    setTrabalhando(trabalhando) {
        this.trabalhando = trabalhando;
    }
    mudarTrabalho(setor) {
        this.setor = setor;
        console.log(`mudando trabalho para ${setor}`);
    }
    mostrarDados() {
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Sexo: ${this.getSexo()}`);
        console.log(`Setor: ${this.getSetor()}`);
        console.log(`Trabalhando?: ${this.getTrabalhando() ? 'sim' : 'não'}`);
    }
}
