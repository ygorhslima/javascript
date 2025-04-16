class Carro{
    constructor(nome, portas, roda){
        this.nome = nome
        this.portas = portas
        this.roda = roda
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    //comportamentos / métodos
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }

    // métodos Getters e Setters
    setCor=function(cor){
        this.cor = cor
    }
    setVel=function(vel){
        this.vel = vel
    }


    info(){
        console.log(`nome: ${this.nome}`)
        console.log(`Portas: ${this.portas}`)
        console.log(`Quantidades de Rodas: ${this.roda}`)
        console.log(`Ligado: ${this.ligado}`)
        console.log(`Velocidade: ${this.vel}`)
        console.log(`cor: ${this.cor}`)
    }
    
}


class Militar extends Carro{
    constructor(nome, portas, roda, blindagem, municao){
        super(nome, portas, roda)
        this.blindagem = blindagem
        this.municao = municao        
        this.ligar()
        this.setVel(80)
        this.setCor("verde")
    }
    atirar=function(){
        if(this.municao > 0){
            this.municao--
            console.log(`Atirando! munição restante: ${this.municao}`)
        }else{
            console.log("sem munição")
        }
    } 
}

const carroMilitar = new Militar("lutador", 1, 6, 100, 1000)
carroMilitar.info()
carroMilitar.atirar()

const c1 = new Carro("Chevrolet", 4, 4)
c1.ligado = true
c1.setVel(40)

console.log(`Nome: ${c1.nome}`)
console.log(`portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado ? "sim":"nao"}`)
console.log(`Velocidade: ${c1.vel}`)


