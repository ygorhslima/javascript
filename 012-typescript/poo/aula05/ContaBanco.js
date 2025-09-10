export class ContaBanco {
    numConta = 0;
    tipo = "";
    dono = "";
    saldo = 0.0;
    status = false;
    constructor() {
        this.saldo = 0.0;
        this.status = false;
    }
    getNumConta() {
        return this.numConta;
    }
    setNumConta(numConta) {
        this.numConta = numConta;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getDono() {
        return this.dono;
    }
    setDono(dono) {
        this.dono = dono;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    mostrarDados() {
        return `
            numConta: ${this.getNumConta()}
            tipo: ${this.getTipo()}
            dono: ${this.getDono()}
            saldo:${this.getSaldo()}
            status:${this.getStatus()}
        `;
    }
    abrirConta(tipo) {
        this.setTipo(tipo);
        this.setStatus(true);
        if (tipo == "cc") {
            this.setSaldo(50);
        }
        else if (tipo == "cp") {
            this.setSaldo(150);
        }
    }
    fecharConta() {
        if (this.getSaldo() > 0) {
            console.log("conta com dinheiro");
        }
        else if (this.getSaldo() < 0) {
            console.log("conta em débito");
        }
        else {
            this.setStatus(false);
        }
    }
    depositar(valor) {
        if (this.getStatus() == true) {
            this.setSaldo(this.getSaldo() + valor);
        }
        else {
            console.log("impossível depositar");
        }
    }
    sacar(valor) {
        if (this.getStatus() == true) {
            if (this.getSaldo() > valor) {
                this.setSaldo(this.getSaldo() - valor);
            }
            else {
                console.log("saldo insuficiente");
            }
        }
        else {
            console.log("impossível sacar");
        }
    }
    pagarMensalidade() {
        let valor;
        if (this.getTipo() === "cc") {
            valor = 12;
        }
        else if (this.getTipo() === "cp") {
            valor = 20;
        }
        else {
            console.log("Tipo de conta inválido!");
            return;
        }
        if (this.getStatus()) {
            if (this.getSaldo() >= valor) {
                this.setSaldo(this.getSaldo() - valor);
                console.log(`Mensalidade de R$${valor} paga com sucesso!`);
            }
            else {
                console.log("Saldo insuficiente para pagar mensalidade.");
            }
        }
        else {
            console.log("Impossível pagar, conta fechada.");
        }
    }
}
