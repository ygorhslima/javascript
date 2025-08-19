const Pessoa = {
    nome:"João",
    idade:25,
    sexo:"Masculino",
    casado:false,
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    getSexo:function(){
        return this.sexo
    }
}

console.log(Pessoa.getNome())
console.log(Pessoa.getIdade())
console.log(Pessoa.getSexo())
