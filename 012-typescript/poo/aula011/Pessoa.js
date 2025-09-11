export class Pessoa {
    nome = "";
    idade = 0;
    sexo = "";
    // Getters
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    getSexo() {
        return this.sexo;
    }
    // Setters
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    fazerAniversario() {
        this.idade++;
        console.log("Fazendo aniversário " + this.idade);
    }
    mostrarDados() {
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Sexo: ${this.getSexo()}`);
    }
}
