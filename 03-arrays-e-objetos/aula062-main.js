import { Carro, Militar } from "./aula062.js";


const c1 = new Carro("Normal", 4,"vermelho")
c1.ligar()
c1.acelerar()
c1.info()
console.log("-".repeat(50))
const c2 = new Militar("Destroyer",1,"prata","400",100)
c2.info()
