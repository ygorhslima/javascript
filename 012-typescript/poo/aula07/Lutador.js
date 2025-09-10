export class Lutador {
    nome = "";
    nacionalidade = "";
    idade = 0;
    altura = 0.0;
    peso = 0.0;
    categoria = "";
    vitorias = 0;
    derrotas = 0;
    empates = 0;
    // Getter e Setter de nome
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    // Getter e Setter de nacionalidade
    getNacionalidade() {
        return this.nacionalidade;
    }
    setNacionalidade(nacionalidade) {
        this.nacionalidade = nacionalidade;
    }
    // Getter e Setter de idade
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    // Getter e Setter de altura
    getAltura() {
        return this.altura;
    }
    setAltura(altura) {
        this.altura = altura;
    }
    // Getter e Setter de peso
    getPeso() {
        return this.peso;
    }
    setPeso(peso) {
        this.peso = peso;
        this.setCategoria();
    }
    // Getter e Setter de categoria
    getCategoria() {
        return this.categoria;
    }
    setCategoria() {
        if (this.peso < 52.2) {
            this.categoria = "Inválido";
        }
        else if (this.peso <= 70.3) {
            this.categoria = "Leve";
        }
        else if (this.peso <= 83.9) {
            this.categoria = "Médio";
        }
        else if (this.peso <= 120.2) {
            this.categoria = "Pesado";
        }
        else {
            this.categoria = "Inválido";
        }
    }
    // Getter e Setter de vitórias
    getVitorias() {
        return this.vitorias;
    }
    setVitorias(vitorias) {
        this.vitorias = vitorias;
    }
    // Getter e Setter de derrotas
    getDerrotas() {
        return this.derrotas;
    }
    setDerrotas(derrotas) {
        this.derrotas = derrotas;
    }
    // Getter e Setter de empates
    getEmpates() {
        return this.empates;
    }
    setEmpates(empates) {
        this.empates = empates;
    }
    constructor(nome, nacionalidade, idade, altura, peso, vitorias, derrotas, empates) {
        this.setNome(nome);
        this.setNacionalidade(nacionalidade);
        this.setIdade(idade);
        this.setAltura(altura);
        this.setPeso(peso);
        this.setVitorias(vitorias);
        this.setDerrotas(derrotas);
        this.setEmpates(empates);
    }
    apresentar() {
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
    status() {
        console.log(this.getNome());
        console.log("é um peso: " + this.getCategoria());
        console.log(this.getVitorias() + " vitórias");
        console.log(this.getDerrotas() + " Derrotas");
        console.log(this.getEmpates() + " Empates");
    }
    ganharLuta() {
        this.setVitorias(this.getVitorias() + 1);
    }
    perderLuta() {
        this.setDerrotas(this.getDerrotas() + 1);
    }
    empatarLuta() {
        this.setEmpates(this.getEmpates() + 1);
    }
}
