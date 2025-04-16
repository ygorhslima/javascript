let amigo = {
    nome: 'Jose',
    sexo: 'M',
    peso: '85.4',
    engordar(p){
        console.log('engordou')
        this.peso += p
    }
  
}
console.log(`${amigo.nome} pesa ${amigo.peso}`)