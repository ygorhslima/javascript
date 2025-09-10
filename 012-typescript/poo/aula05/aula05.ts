import { ContaBanco } from "./ContaBanco.js";

const conta1 = new ContaBanco();
conta1.setDono("jubileu");
conta1.setNumConta(11111111);
conta1.abrirConta("cc");
conta1.depositar(400);
conta1.sacar(30);
console.log(conta1.mostrarDados());
