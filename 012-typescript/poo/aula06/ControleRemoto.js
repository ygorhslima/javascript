export class ControleRemoto {
    volume = 0;
    ligado = false;
    tocando = false;
    constructor() {
        this.volume = 50;
        this.ligado = false;
        this.tocando = false;
    }
    // Getters
    getVolume() {
        return this.volume;
    }
    getLigado() {
        return this.ligado;
    }
    getTocando() {
        return this.tocando;
    }
    // Setters
    setVolume(volume) {
        this.volume = volume;
    }
    setLigado(ligado) {
        this.ligado = ligado;
    }
    setTocando(tocando) {
        this.tocando = tocando;
    }
    ligar() {
        this.setLigado(true);
    }
    desligar() {
        this.setLigado(false);
    }
    abrirMenu() {
        if (this.getLigado()) {
            console.log("---------------MENU---------------");
            console.log(`está ligado?: ${this.getLigado() ? 'sim' : 'não'}`);
            console.log(`está tocando?: ${this.getTocando() ? 'sim' : 'não'}`);
            for (let i = 0; i <= this.getVolume(); i += 10) {
                let barra = "[]";
                console.log(`${i} - ${barra}`);
            }
        }
        else {
            console.log("impossível ligar o menu");
        }
    }
    fecharMenu() {
        console.log("fechando volume");
    }
    maisVolume() {
        if (this.getLigado()) {
            this.setVolume(this.getVolume() + 5);
        }
        else {
            console.log("impossível aumentar volume");
        }
    }
    menosVolume() {
        if (this.getLigado()) {
            this.setVolume(this.getVolume() - 5);
        }
        else {
            console.log("impossível diminuir volume");
        }
    }
    ligarMenu() {
        if (this.getLigado() && (this.getVolume() > 0)) {
            this.setVolume(0);
        }
    }
    desligarMenu() {
        if (this.getLigado() && (this.getVolume() == 0)) {
            this.setVolume(10);
        }
    }
    play() {
        if (this.getLigado() && !(this.getTocando())) {
            this.setTocando(true);
        }
        else {
            console.log("não conseguir dar play");
        }
    }
    pause() {
        if (this.getLigado() && this.getTocando()) {
            this.setTocando(false);
        }
        else {
            console.log("não conseguir dar pause");
        }
    }
}
