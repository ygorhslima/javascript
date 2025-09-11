import { Pessoa } from "./Pessoa.js";

export class Aluno extends Pessoa{
    private mat:number=0;
    private curso:string="";

    // Getters
    public getMat(): number {
        return this.mat;
    }

    public getCurso(): string {
        return this.curso;
    }

    // Setters
    public setMat(mat: number): void {
        this.mat = mat;
    }

    public setCurso(curso: string): void {
        this.curso = curso;
    }

    public cancelarMat():void{
        console.log("cancelando matricula");
    }

     public mostrarDados():void{
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Sexo: ${this.getSexo()}`);
        console.log(`Matricula: ${this.getMat()}`);
        console.log(`Curso: ${this.getCurso()}`);
    }
}