// Abstração em JS
class CarroPadrao {
    constructor(){
        if(this.constructor===CarroPadrao)
        {
            throw new TypeError("Esta Classe não pode ser instanciada")
        }
        if (this.ligar===undefined)
        {
            throw new TypeError("é obrigatório implementar o método ")
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }
}

class Carro extends CarroPadrao{
    constructor(tipo, estagioTurbo){
       super()
       this.turbo=new Turbo(estagioTurbo)
       if(tipo == 1)
        {
            this.velMax = 120
            this.nome = 'normal'
       }
       if(tipo == 2)
        {
            this.velMax = 160
            this.nome = 'esportivo'
        }
       if(tipo == 3)
        {
            this.velMax = 200
            this.nome = 'super esportivo'
        }
       this.velMax+=this.turbo.potencia
    }
    
    ligar(){this.ligado=true}
    desligar(){this.ligado=false}
    
    info(){
        console.log('-------------------------')
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade Máxima: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo}`)
        console.log(`Rodas: ${this.rodas}`)
        console.log(`Portas: ${this.portas}`)
        console.log(`Está ligado o carro?: ${this.ligado}`)
        console.log('-------------------------')
    }
}

class Turbo {
    constructor(estagio){
        if(estagio==0){
            this.potencia = 0
        }else if(estagio==1){
            this.potencia = 50
        }else if(estagio==2){
            this.potencia = 75
        }else if(estagio==3){
            this.potencia = 100
        }
    }
}

class CarroEspecial extends Carro {
    constructor(estagioTurbo){
        super(4, estagioTurbo)
        this.tipoInfo=0
        this.velMax = 300
        this.nome = 'Carro Especial'
        this.velMax = 300 + this.turbo.potencia
    }
    info(){ 
        if(this.tipoInfo==1){
            super.info()
        }else{
            console.log(`Nome: ${this.nome}`)
            console.log(`Velocidade Máxima: ${this.velMax}`)
            console.log(`Turbo: ${this.turbo.potencia}`)   
        }
    }
}

const c1 = new Carro(1, 2)
c1.info()