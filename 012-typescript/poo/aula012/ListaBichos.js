import { Ave } from "./Ave.js";
import { Mamifero } from "./Mamifero.js";
import { Peixe } from "./Peixe.js";
import { Reptil } from "./Reptil.js";
// bichos mamíferos
class Canguru extends Mamifero {
    usarBolsa() {
        console.log("Usando Bolsa");
    }
    locomover() {
        console.log("Saltando");
    }
}
class Cachorro extends Mamifero {
    enterrarOsso() {
        console.log("enterrando osso");
    }
    abanarRabo() {
        console.log("Abanando o rabo");
    }
}
// bichos Reptil
class Cobra extends Reptil {
}
class Tartaruga extends Reptil {
    locomover() {
        console.log("andando beeeeeeeeeeeeeeeem devagar");
    }
}
// bicho peixe
class Goldfish extends Peixe {
}
// bicho ave
class Arara extends Ave {
}
export { Canguru, Cachorro, Cobra, Tartaruga, Goldfish, Arara };
