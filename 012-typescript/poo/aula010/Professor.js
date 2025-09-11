import { Pessoa } from "./Pessoa.js";
export class Professor extends Pessoa {
    especialidade = "";
    salario = 0.0;
    // Getters
    getEspecialidade() {
        return this.especialidade;
    }
    getSalario() {
        return this.salario;
    }
    // Setters
    setEspecialidade(especialidade) {
        this.especialidade = especialidade;
    }
    setSalario(salario) {
        this.salario = salario;
    }
    receberAumento(aumento) {
        this.salario += aumento;
    }
    mostrarDados() {
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Sexo: ${this.getSexo()}`);
        console.log(`especialidade: ${this.getEspecialidade()}`);
        console.log(`Salário: R$${this.getSalario()}`);
    }
}
