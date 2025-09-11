import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa{
    private setor:string="";
    private trabalhando:boolean=false;

    // Getters
    public getSetor(): string {
        return this.setor;
    }

    public getTrabalhando(): boolean {
        return this.trabalhando;
    }

    // Setters
    public setSetor(setor: string): void {
        this.setor = setor;
    }

    public setTrabalhando(trabalhando: boolean): void {
        this.trabalhando = trabalhando;
    }

    public mudarTrabalho(setor:string):void{
        this.setor = setor;
        console.log(`mudando trabalho para ${setor}`);
    }

    public mostrarDados():void{
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Sexo: ${this.getSexo()}`);
        console.log(`Setor: ${this.getSetor()}`);
        console.log(`Trabalhando?: ${this.getTrabalhando() ? 'sim':'não'}`);
    }

}