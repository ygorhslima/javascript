/*
let n = 0
let max = 20

while (n <= max){
    console.log(n)
    if(n > 10){
        break
    }
    n++
}
console.log("fim do programa")*/

let pares=0
for(let i=0; i < 20; i++){
    if(i % 2 == 0){
        pares++
    }else if(i % 2 != 0){
        continue
    }
}
console.log("quant de pares: " + pares)