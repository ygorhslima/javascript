const cursos = ["HTML","CSS","JavaScript","Arduino","Raspberry","C++","Python","Java","C#"]

function SomarValores(...n){
    let soma = n.reduce((acc,el)=>{
        return acc+el
    })
    return soma
}

/**EXPORT DEFAULT É ÚNICO */
export default function getTodosOsCursos(){
    return cursos
}

export {cursos, SomarValores, getTodosOsCursos}