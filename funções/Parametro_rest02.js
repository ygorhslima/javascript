let soma = function (...valores) {
    let res = 0
    for(v of valores){
        res+=v
    }
    return res
}
console.log(soma(10,10,10,10))

const f=new Function("v1","v2","return v1+v2")
console.log(f(10,5))