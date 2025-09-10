export class Lutador {
    private nome: string = "";
    private nacionalidade: string = "";
    private idade: number = 0;
    private altura: number = 0.0;
    private peso: number = 0.0;
    private categoria: string = "";
    private vitorias: number = 0;
    private derrotas: number = 0;
    private empates: number = 0;

    // Getter e Setter de nome
    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }

    // Getter e Setter de nacionalidade
    public getNacionalidade(): string {
        return this.nacionalidade;
    }
    public setNacionalidade(nacionalidade: string): void {
        this.nacionalidade = nacionalidade;
    }

    // Getter e Setter de idade
    public getIdade(): number {
        return this.idade;
    }
    public setIdade(idade: number): void {
        this.idade = idade;
    }

    // Getter e Setter de altura
    public getAltura(): number {
        return this.altura;
    }
    public setAltura(altura: number): void {
        this.altura = altura;
    }

    // Getter e Setter de peso
    public getPeso(): number {
        return this.peso;
    }
    public setPeso(peso: number): void {
        this.peso = peso;
        this.setCategoria();
    }

    // Getter e Setter de categoria
    public getCategoria(): string {
        return this.categoria;
    }
    private setCategoria(): void {
        if(this.peso < 52.2){
            this.categoria = "Inválido";
        }else if(this.peso <= 70.3){
            this.categoria = "Leve";
        }else if(this.peso <= 83.9){
            this.categoria = "Médio";
        }else if(this.peso <= 120.2){
            this.categoria = "Pesado"
        }else{
            this.categoria = "Inválido";
        }
    }

    // Getter e Setter de vitórias
    public getVitorias(): number {
        return this.vitorias;
    }
    public setVitorias(vitorias: number): void {
        this.vitorias = vitorias;
    }

    // Getter e Setter de derrotas
    public getDerrotas(): number {
        return this.derrotas;
    }
    public setDerrotas(derrotas: number): void {
        this.derrotas = derrotas;
    }

    // Getter e Setter de empates
    public getEmpates(): number {
        return this.empates;
    }
    public setEmpates(empates: number): void {
        this.empates = empates;
    }

    constructor(nome:string, nacionalidade:string, idade:number, altura:number, peso:number, vitorias:number, derrotas:number, empates:number){
        this.setNome(nome);
        this.setNacionalidade(nacionalidade);
        this.setIdade(idade);
        this.setAltura(altura);
        this.setPeso(peso);
        this.setVitorias(vitorias);
        this.setDerrotas(derrotas);
        this.setEmpates(empates);
    }

    public apresentar():void{
        console.log(`
        Lutador: ${this.getNome()}
        Origem: ${this.getNacionalidade()}
        Idade: ${this.getIdade()} anos
        Altura: ${this.getAltura()}m
        Pesando: ${this.getPeso()}kg
        Ganhou: ${this.getVitorias()}
        Perdeu: ${this.getDerrotas()}
        Empatou: ${this.getEmpates()}
        `);
    }
    public status():void{
        console.log(this.getNome());
        console.log("é um peso: " + this.getCategoria());
        console.log(this.getVitorias() + " vitórias");
        console.log(this.getDerrotas() + " Derrotas");
        console.log(this.getEmpates() + " Empates");
    }
    public ganharLuta():void{
        this.setVitorias(this.getVitorias() + 1);
    }
    public perderLuta():void{
        this.setDerrotas(this.getDerrotas() + 1);
    }
    public empatarLuta():void{
        this.setEmpates(this.getEmpates() + 1);
    }
}
