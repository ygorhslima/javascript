import { Pessoa } from "./Pessoa.js";
export class Aluno extends Pessoa {
    mat = 0;
    curso = "";
    // Getters
    getMat() {
        return this.mat;
    }
    getCurso() {
        return this.curso;
    }
    // Setters
    setMat(mat) {
        this.mat = mat;
    }
    setCurso(curso) {
        this.curso = curso;
    }
    cancelarMat() {
        console.log("cancelando matricula");
    }
    pagarMensal() {
        console.log(`pagando mensalidade de ${this.getNome()} `);
    }
    mostrarDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Sexo: ${this.getSexo()}`);
        console.log(`Matricula: ${this.getMat()}`);
        console.log(`Curso: ${this.getCurso()}`);
    }
}
