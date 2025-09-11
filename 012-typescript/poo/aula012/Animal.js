export class Animal {
    peso = 0.0;
    idade = 0;
    membros = 0;
    // Getters
    getPeso() {
        return this.peso;
    }
    getIdade() {
        return this.idade;
    }
    getMembros() {
        return this.membros;
    }
    // Setters
    setPeso(peso) {
        this.peso = peso;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setMembros(membros) {
        this.membros = membros;
    }
}
