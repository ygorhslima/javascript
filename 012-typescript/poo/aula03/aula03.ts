import {Caneta} from './Caneta.js';

const c1:Caneta = new Caneta();
c1.nome = "Faber Castell";
c1.cor = "preto";
/*
c1.carga = 90;
c1.ponta = 1.1;
*/
c1.rabiscar();
console.log(c1.mostrarDados());