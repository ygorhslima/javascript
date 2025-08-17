class Carro{
    constructor(pnome, ptipo){
        this.nome = pnome
        this.tipo = ptipo
        if(ptipo == 1){
            this.tipo = 'Esportivo'
            this.velmax = 300
        }else if(ptipo == 2){
            this.tipo = "Utilitário"
            this.velmax = 100
        }else if(ptipo == 3){
            this.tipo = "Passeio"
            this.velmax = 100
        }else{
            this.tipo = "Militar"
            this.velmax = 180
        }
    }

    getNome(){
        return this.nome
    }

    setNome(nome){
        this.nome = nome
    }
    
    getTipo(){
        return this.tipo        
    }
    
    setTipo(tipo){
        this.tipo = tipo
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade Máxima: ${this.velmax}`)
    }
}

let p1 = new Carro("Rapidão",1)
let p2 = new Carro("super luxo",2)
let p3 = new Carro("Bombadão",4)
let p4 = new Carro("Carrego Tudo",4)
p1.info()
p2.info()
p3.info()
p4.info()