export abstract class Animal{
    protected peso:number=0.0;
    protected idade:number=0;
    protected membros:number=0;

    // Getters
    public getPeso(): number {
        return this.peso;
    }

    public getIdade(): number {
        return this.idade;
    }

    public getMembros(): number {
        return this.membros;
    }

    // Setters
    public setPeso(peso: number): void {
        this.peso = peso;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public setMembros(membros: number): void {
        this.membros = membros;
    }

    public abstract locomover():void;
    public abstract alimentar():void;
    public abstract emitirSom():void;


}