let num = [10,5,8,9]
num[4] = 6

num.sort()

num.push(7)
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)

if(pos == -1){
    console.log('o valor não foi encontrado')
}else {
    console.log(`o valor está na posição ${pos}`)
}

