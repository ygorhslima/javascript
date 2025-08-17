const array = [10,20,30]

//for tradicional
for (let i=0; i < array.length; i++){
    console.log(array[i])
}

console.log('-='.repeat(30))

//for of = para iteração de elementos
for (const element of array)
{
    console.log(element)
}

console.log('-='.repeat(30))

// for in = para iteração de índices
for (const i in array){
    console.log(i)
}