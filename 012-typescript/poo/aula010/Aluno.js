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
    mostrarDados() {
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Sexo: ${this.getSexo()}`);
        console.log(`Matricula: ${this.getMat()}`);
        console.log(`Curso: ${this.getCurso()}`);
    }
}
