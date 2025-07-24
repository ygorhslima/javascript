const f = function(n1,n2){
    return n1 + n2
}

const f2 = new Function("v1","v2","return v1+v2")

console.log(f(10,20))
console.log(f2(20,30))