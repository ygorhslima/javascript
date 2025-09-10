export class Caneta {
    nome = "";
    cor = "";
    ponta = 0.0;
    carga = 0;
    tampada = false;
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
            Modelo: ${this.nome}
            cor: ${this.cor}
            ponta: ${this.ponta}
            carga: ${this.carga}
            está tampada?: ${this.tampada ? "sim" : "não"}
        `;
    }
}
