export class Luta {
    desafiado;
    desafiante;
    aprovada = false;
    constructor(desafiado, desafiante) {
        this.desafiado = desafiado;
        this.desafiante = desafiante;
        this.marcarLuta(this.desafiado, this.desafiante);
    }
    // Getters
    getDesafiado() {
        return this.desafiado;
    }
    getDesafiante() {
        return this.desafiante;
    }
    getAprovada() {
        return this.aprovada;
    }
    // Setters
    setDesafiado(desafiado) {
        this.desafiado = desafiado;
    }
    setDesafiante(desafiante) {
        this.desafiante = desafiante;
    }
    setAprovada(aprovada) {
        this.aprovada = aprovada;
    }
    marcarLuta(l1, l2) {
        //só pode ser marcada entre lutadores da mesma categoria
        //desafiado e desafiante devem ser lutadores diferentes
        if ((l1.getCategoria() === l2.getCategoria()) && (l1 != l2)) {
            this.setAprovada(true);
            this.setDesafiado(l1);
            this.setDesafiante(l2);
        }
        else {
            this.setAprovada(false);
            console.log("ERRO! os lutadores são de categorias diferentes ou é o mesmo lutador que está lutando com ele mesmo");
        }
    }
    lutar() {
        //só pode acontecer se estiver aprovado
        if (this.getAprovada()) {
            this.desafiado.apresentar();
            this.desafiante.apresentar();
            let vencedor = Math.floor(Math.random() * 3);
            switch (vencedor) {
                case 0:
                    console.log(`luta entre ${this.getDesafiado().getNome()} e ${this.getDesafiante().getNome()}, o resultado foi empate`);
                    this.desafiado.empatarLuta();
                    this.desafiante.empatarLuta();
                    break;
                case 1:
                    console.log(`luta entre ${this.getDesafiado().getNome()} e ${this.getDesafiante().getNome()}, o resultado foi: ${this.getDesafiado().getNome()} venceu`);
                    this.desafiado.ganharLuta();
                    this.desafiante.perderLuta();
                    break;
                case 2:
                    console.log(`luta entre ${this.getDesafiado().getNome()} e ${this.getDesafiante().getNome()}, o resultado foi ${this.getDesafiante().getNome()} venceu`);
                    this.desafiado.perderLuta();
                    this.desafiante.ganharLuta();
                    break;
                default:
                    break;
            }
        }
        else {
            console.log("luta não pode acontecer");
        }
    }
}
