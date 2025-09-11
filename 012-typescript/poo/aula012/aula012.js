/*
import { Ave } from "./Ave.js";
import { Mamifero } from "./Mamifero.js";
import { Peixe } from "./Peixe.js";
import { Reptil } from "./Reptil.js";
*/
/*
const m:Mamifero = new Mamifero();
m.setPeso(85.4);
m.setIdade(2);
m.setMembros(4);
m.locomover();
m.alimentar();
m.emitirSom();
console.log("-".repeat(50))
*/
/*
const r:Reptil = new Reptil();
r.setPeso(69);
r.setIdade(10);
r.setMembros(4);
r.locomover();
r.alimentar();
r.emitirSom();
console.log("-".repeat(50))
*/
/*
const p:Peixe = new Peixe();
p.setPeso(0.35);
p.setIdade(1);
p.setMembros(0);
p.setCorEscama("azul");
p.locomover();
p.alimentar();
p.emitirSom();
p.soltarBolhas();
console.log("-".repeat(50))
*/
/*
const a:Ave = new Ave();
a.setPeso(0.89);
a.setIdade(2);
a.setMembros(2);
a.setCorPena("Branco");
a.locomover();
a.alimentar();
a.emitirSom();
*/
import { Canguru, Cachorro, Cobra, Tartaruga, Goldfish, Arara } from "./ListaBichos.js";
const canguru = new Canguru();
canguru.setPeso(100);
canguru.setIdade(10);
canguru.setMembros(4);
canguru.locomover();
canguru.alimentar();
canguru.emitirSom();
const cachorro = new Cachorro();
cachorro.abanarRabo();
cachorro.alimentar();
cachorro.locomover();
cachorro.enterrarOsso();
const cobra = new Cobra();
cobra.locomover();
cobra.alimentar();
cobra.emitirSom();
const tartaruga = new Tartaruga();
tartaruga.alimentar();
tartaruga.setPeso(100);
tartaruga.emitirSom();
tartaruga.locomover();
const goldfish = new Goldfish();
const arara = new Arara();
