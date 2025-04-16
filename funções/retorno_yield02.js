function* perguntas() {
    const nome = yield 'qual o seu nome?'
    const esport = yield 'qual seu esporte favorito?'
    return `seu nome é ${nome} e seu esporte favorite é ${esport}`
}

const iterator = perguntas()
console.log(iterator.next().value)
console.log(iterator.next('ygor').value)
console.log(iterator.next('basquete').value)