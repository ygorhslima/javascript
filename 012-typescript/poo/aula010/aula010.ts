import { Aluno } from "./Aluno.js";
import { Funcionario } from "./Funcionario.js";
import { Pessoa } from "./Pessoa.js";
import { Professor } from "./Professor.js";

console.log("-".repeat(50))

const p1 = new Pessoa();
p1.setNome("João");
p1.setIdade(19);
p1.setSexo("Masculino");
p1.mostrarDados();

console.log("-".repeat(50))

const p2 = new Aluno();
p2.setNome("Maria")
p2.setIdade(22);
p2.setSexo("Feminino");
p2.setCurso("Enfermagem");
p2.setMat(222333);
p2.mostrarDados();
p2.cancelarMat();

console.log("-".repeat(50))


const p3 = new Funcionario();
p3.setNome("Roberto");
p3.setIdade(42);
p3.setSexo("Masculino");
p3.setSetor("Engenheiro");
p3.setTrabalhando(true);
p3.mostrarDados();


console.log("-".repeat(50))

const p4 = new Professor();
p4.setNome("Joana");
p4.setIdade(37);
p4.setSexo("Feminino");
p4.setEspecialidade("Física")
p4.setSalario(6700);
p4.mostrarDados();


console.log("-".repeat(50))