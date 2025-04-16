class Cursos{
    static cursos = ["javascript","Python","HTML","CSS","Raspberry","C++","Java","C#"]
    static getTodosCursos=()=>{
        return this.cursos
    }
    static getCurso=(i_curso)=>{
        return this.cursos[i_curso]
    }
    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }
    static apagarCursos=()=>{
        this.cursos=[]
    }
}
export default Cursos;