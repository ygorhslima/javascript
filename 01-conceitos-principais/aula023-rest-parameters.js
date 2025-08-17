function soma(...valores){
    // let tam=valores.length
    // let res=0
    // for(let i=0; i<tam;i++){
    //     res+=valores[i]
    // }
    let res = 0
    for (const element of valores){
        res += element
    }
    return res
}
console.log(soma(10,5,4,3,2))