export class Caneta {
    nome = "";
    cor = "";
    ponta = 0.0;
    carga = 0;
    tampada = false;
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setCor(cor) {
        this.cor = cor;
    }
    getCor() {
        return this.cor;
    }
    setPonta(ponta) {
        this.ponta = ponta;
    }
    getPonta() {
        return this.ponta;
    }
    setCarga(carga) {
        this.carga = carga;
    }
    getCarga() {
        return this.carga;
    }
    setTampada(tampada) {
        this.tampada = tampada;
    }
    getTampada() {
        return this.tampada;
    }
    rabiscar() {
        if (this.tampada == true) {
            console.log("erro");
        }
        else {
            console.log("Rabisco");
        }
    }
    tampar() {
        this.tampada = true;
    }
    destampar() {
        this.tampada = false;
    }
    mostrarDados() {
        return `
            Modelo: ${this.getNome()}
            cor: ${this.getCor()}
            ponta: ${this.getPonta()}
            carga: ${this.getCarga()}
            está tampada?: ${this.getTampada() ? "sim" : "não"}
        `;
    }
}
