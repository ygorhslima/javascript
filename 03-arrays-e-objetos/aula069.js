/*no typescript -> abstract*/ class CarroPadrao {
    constructor() {
        if(this.constructor === CarroPadrao){throw new Error("Esta classe não pode ser instanciado")}
        this.rodas = 4;
        this.portas = 4;
        this.ligado = false;
    }
}

class Carro extends CarroPadrao{
    constructor(tipo,estagioTurbo){
        super()
        this.turbo = new Turbo(estagioTurbo)
        if(tipo == 1){
            this.velMax = 120
            this.nome="normal"
        }else if(tipo == 2){
            this.velMax = 160
            this.nome="esportivo"
        }else if(tipo == 3){
            this.velMax = 200
            this.nome="super esportivo"
        }
        this.velMax += this.turbo.pot
    }
    info(){
        console.log(`nome: ${this.nome}`)
        console.log(`velocidade máxima: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo}`)
        console.log(`Rodas: ${this.rodas}`)
        console.log(`Portas: ${this.portas}`)
        console.log("-=".repeat(50))
    }
}

class Turbo{
    constructor(e){
        if(e==0){
            this.pot = 0
        }
        else if(e==1){
            this.pot = 50
        }else if(e==2){
            this.pot = 75
        }
        else if(e==3){
            this.pot = 100
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(3,estagioTurbo);
        this.velMax = 300 + this.turbo.pot
        this.nome = "Carro Especial";
    }
}

const carro1=new Carro(1,0);
const carro2=new Carro(1,1);
const carro3=new CarroEspecial(3)

carro1.info();
carro2.info();
carro3.info();