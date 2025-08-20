function SomarValores(...n){
    let soma = n.reduce((acc,el)=>{
        return acc+el
    })
    return soma
}

function subtrairValores(n1,n2){
   return n1-n2
}

function multiplicarValores(n1,n2){
   return n1 * n2
}

export default function dividirValores(n1,n2){
    if(n2 == 0){
        console.log("impossível dividir")
    }else{
        return n1 / n2
    }
}

//export comum
export {SomarValores, subtrairValores, multiplicarValores}