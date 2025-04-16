function Aluno(nome, nota) {
     this.nome=nome
     this.nota=nota
     this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        })
     }
}

const al1 = new Aluno("bruno",100)
al1.dados_arrow()