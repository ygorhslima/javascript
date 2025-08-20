
/*import { SomarValores, subtrairValores, multiplicarValores } from './utilitarios.js'*/
import dividirValores from './utilitarios.js'


//TUDO QUE ESTÁ EM utilitarios
import * as utilitarios from './utilitarios.js'

// importando classes
import Cursos from './Cursos.js'

console.log(utilitarios.SomarValores(10,30,40))
console.log(utilitarios.subtrairValores(20,10))
console.log(utilitarios.multiplicarValores(10,2))
console.log(dividirValores(10,2))


Cursos.addCurso("photoshop")
Cursos.getCursos()