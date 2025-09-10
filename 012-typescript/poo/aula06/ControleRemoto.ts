import type { Controlador } from "./Controlador.js";

export class ControleRemoto implements Controlador{
    private volume:number=0;
    private ligado:boolean=false;
    private tocando:boolean=false;

    constructor(){
        this.volume = 50;
        this.ligado = false;
        this.tocando = false;   
    }

    // Getters
    private getVolume(): number {
        return this.volume;
    }

    private getLigado(): boolean {
        return this.ligado;
    }

    private getTocando(): boolean {
        return this.tocando;
    }

    // Setters
    private setVolume(volume: number): void {
        this.volume = volume;
    }

    private setLigado(ligado: boolean): void {
        this.ligado = ligado;
    }

    private setTocando(tocando: boolean): void {
        this.tocando = tocando;
    }
    

    public ligar(): void{
        this.setLigado(true);
    }
    public desligar(): void{
        this.setLigado(false);
    }
    public abrirMenu(): void{
        if(this.getLigado()){
            console.log("---------------MENU---------------");
            console.log(`está ligado?: ${this.getLigado() ? 'sim':'não'}`);
            console.log(`está tocando?: ${this.getTocando() ? 'sim':'não'}`);
            for(let i=0; i <= this.getVolume(); i+=10){
                let barra = "[]";
                console.log(`${i} - ${barra}`);
            }
        }else{
            console.log("impossível ligar o menu");
        }
    }
    public fecharMenu(): void{ 
        console.log("fechando volume");
    }
    public maisVolume(): void{
        if(this.getLigado()){
            this.setVolume(this.getVolume() + 5);
        }else{
            console.log("impossível aumentar volume");
        }
    }
    public menosVolume(): void{
        if(this.getLigado()){
            this.setVolume(this.getVolume() - 5);
        }else{
            console.log("impossível diminuir volume");
        }
    }
    public ligarMenu(): void{
        if(this.getLigado() && (this.getVolume() > 0)){
            this.setVolume(0);
        }
    }
    public desligarMenu(): void{
        if(this.getLigado() && (this.getVolume() == 0)){
            this.setVolume(10);
        }
    }
    public play(): void{
        if(this.getLigado() && !(this.getTocando())){
            this.setTocando(true);
        }else{
            console.log("não conseguir dar play")
        }
    }
    public pause(): void{
        if(this.getLigado() && this.getTocando()){
            this.setTocando(false);
        }else{
            console.log("não conseguir dar pause");
        }
    }
}