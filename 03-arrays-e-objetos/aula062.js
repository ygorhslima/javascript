class Carro{
    constructor(nome='', portas=0, cor=''){
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = cor;
    }
    
    ligar = function(){
        this.ligado = true
    }

    desligar = function(){
        this.ligado = false;
    }

    setPortas=function(portas){
        this.portas = portas
    }

    setNome=function(nome){
        this.nome = nome
    }

    setCor=function(cor){
        this.cor=cor 
    }

    acelerar=function(){
        this.vel+=10
    }
    desacelerar=function(){
        this.vel-=10
    }

    info=function(){
        console.log(`nome do carro: ${this.nome}`)
        console.log(`quantidade de portas: ${this.portas}`)
        console.log(`está ligado?: ${this.ligado}`)
        console.log(`velocidade: ${this.vel}`)
        console.log(`cor do carro: ${this.cor}`)
    }
}

class Militar extends Carro{
    constructor(nome, portas, cor, blindagem, municao){
        super(nome,portas,cor)
        this.blindagem = blindagem
        this.municao = municao
    }
    atirar=function(){
        if(this.municao > 0){
            console.log(`atirou: ${this.municao--}`);
        }
    }

    info=function(){
        console.log(`nome do carro: ${this.nome}`)
        console.log(`quantidade de portas: ${this.portas}`)
        console.log(`está ligado?: ${this.ligado}`)
        console.log(`velocidade: ${this.vel}`)
        console.log(`cor do carro: ${this.cor}`)
        console.log(``)
    }
}

export {Carro, Militar}