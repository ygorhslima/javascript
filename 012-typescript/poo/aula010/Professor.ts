import { Pessoa } from "./Pessoa.js";

export class Professor extends Pessoa{
    private especialidade:string="";
    private salario:number=0.0;

    // Getters
    public getEspecialidade(): string {
        return this.especialidade;
    }

    public getSalario(): number {
        return this.salario;
    }

    // Setters
    public setEspecialidade(especialidade: string): void {
        this.especialidade = especialidade;
    }

    public setSalario(salario: number): void {
        this.salario = salario;
    }

    public receberAumento(aumento:number):void{
        this.salario += aumento;
    }

    public mostrarDados():void{
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Sexo: ${this.getSexo()}`);
        console.log(`especialidade: ${this.getEspecialidade()}`);
        console.log(`Salário: R$${this.getSalario()}`);
    }
}