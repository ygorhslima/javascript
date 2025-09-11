export class Pessoa{
    private nome:string="";
    private idade:number=0;
    private sexo:string="";

    // Getters
    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public getSexo(): string {
        return this.sexo;
    }

    // Setters
    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public setSexo(sexo: string): void {
        this.sexo = sexo;
    }

    
    public fazerAniversario():void{
        console.log("Fazendo aniversário" + this.idade++);
    }
    
     public mostrarDados():void{
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Sexo: ${this.getSexo()}`);
    }
}