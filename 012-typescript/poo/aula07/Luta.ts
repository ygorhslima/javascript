import { Lutador } from "./Lutador.js";

export class Luta{
    private desafiado:Lutador;
    private desafiante:Lutador;
    private aprovada:boolean=false;

    constructor(desafiado:Lutador, desafiante:Lutador){
        this.desafiado = desafiado;
        this.desafiante = desafiante;
        this.marcarLuta(this.desafiado,this.desafiante);
    }

    // Getters
    private getDesafiado(): Lutador {
        return this.desafiado;
    }

    private getDesafiante(): Lutador {
        return this.desafiante;
    }


    private getAprovada(): boolean {
        return this.aprovada;
    }

    // Setters
    private setDesafiado(desafiado: Lutador): void {
        this.desafiado = desafiado;
    }

    private setDesafiante(desafiante: Lutador): void {
        this.desafiante = desafiante;
    }

    private setAprovada(aprovada: boolean): void {
        this.aprovada = aprovada;
    }
    
    private marcarLuta(l1:Lutador, l2:Lutador){
        //só pode ser marcada entre lutadores da mesma categoria
        //desafiado e desafiante devem ser lutadores diferentes
        if((l1.getCategoria() === l2.getCategoria()) && (l1 != l2)){
            this.setAprovada(true);
            this.setDesafiado(l1);
            this.setDesafiante(l2);
        }else{
            this.setAprovada(false);
            console.log("ERRO! os lutadores são de categorias diferentes ou é o mesmo lutador que está lutando com ele mesmo")
        }
    }
    
    public lutar(){
        //só pode acontecer se estiver aprovado
        if(this.getAprovada()){
            this.desafiado.apresentar();
            this.desafiante.apresentar();
            let vencedor = Math.floor(Math.random() * 3);
            switch (vencedor) {
                case 0:
                    console.log(`luta entre ${this.getDesafiado().getNome()} e ${this.getDesafiante().getNome()}, o resultado foi empate`);
                    this.desafiado.empatarLuta()
                    this.desafiante.empatarLuta()
                    break;
                case 1:
                    console.log(`luta entre ${this.getDesafiado().getNome()} e ${this.getDesafiante().getNome()}, o resultado foi: ${this.getDesafiado().getNome()} venceu`);
                    this.desafiado.ganharLuta()
                    this.desafiante.perderLuta()
                    break;
                case 2:
                    console.log(`luta entre ${this.getDesafiado().getNome()} e ${this.getDesafiante().getNome()}, o resultado foi ${this.getDesafiante().getNome()} venceu`);
                    this.desafiado.perderLuta()
                    this.desafiante.ganharLuta()
                    break;
                default:
                    break;
            }
        }else{
            console.log("luta não pode acontecer")
        }
    }
}
