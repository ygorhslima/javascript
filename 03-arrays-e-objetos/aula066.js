class Npc{ 
    static alerta = false;
    constructor(energia){
        this.energia = energia;
    }

    info=function(){
        console.log(`Energia: ${this.energia}`);
        console.log(`Alerta: ${Npc.alerta?"Sim":"Não"}`);
        console.log("-".repeat(30))
    }
}

const n1 = new Npc(100);
const n2 = new Npc(300)


Npc.alerta = true 
n1.info()
n2.info()
