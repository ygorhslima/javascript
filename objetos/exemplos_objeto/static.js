class Npc{
    static alerta = false
    constructor(energia){
        this.energia=energia
    }
    info=()=>{
        console.log(`energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta?"sim":"não"}`)
        console.log("------------------------------------")
    }
}

const c1 = new Npc(100)
const c2 = new Npc(80)
const c3 = new Npc(30)

Npc.alerta=true

c1.info()
c2.info()
c3.info()