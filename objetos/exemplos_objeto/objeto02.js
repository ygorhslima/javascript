class Carro{
    nome = "chervolet"
    ano = 2015
    tipo = "SUV"

    constructor(pnome, ptipo){
        this.nome = pnome
        this.tipo = ptipo
        
        if(ptipo == 1){
            this.tipo = "esportivo"
            this.velmax = 300
        }
        else if(ptipo == 2){
            this.tipo = "utilitario"
            this.velmax = 100
        }
        else if (ptipo == 3){
            this.tipo = "passeio"
            this.velmax = 160
        }
        else {
            this.tipo = "militar"
            this.velmax = 140
        }
    }

    getNome(){
        return this.nome
    }
    setNome(){
        this.nome = nome
    }
    getTipo(){
        return this.tipo
    }
    setTipo(){
        this.tipo = tipo
    }
    getVelmax(){
        return this.velmax
    }
    setVelmax(){
        this.velmax = velmax
    }
    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }

    info(){
        console.log(`nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V.Max: ${this.velmax}`)
    }

}


let c1 = new Carro("modelo esportivo", 1)
let c2 = new Carro("Ford KA", 2)
let c3 = new Carro("fiat UNO", 3)
let c4 = new Carro("bombadão", 4)
c3.setTipo()
console.log(c1.getInfo())