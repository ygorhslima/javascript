class Cursos{
    static cursos =  ["HTML","CSS","JavaScript","Arduino","Raspberry","C++","Python","Java","C#"]
    constructor(){
    }
    static getTodosCursos = () =>{
        return this.cursos
    }   
    static getCursos = (i_curso)=>{
        return this.cursos[i_curso]
    } 
    static addCurso = (novoCurso)=>{
        this.cursos.push(novoCurso)
    }
    static apagarCursos=()=>{
        this.cursos=[]
    }
}

export default Cursos