import { contatos } from "./bancoContatos.js";

let contato = {
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },
    addContato:function(novoContato,destinoDOM){
        const cont={    
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
        }
        contatos.push(cont)

        destinoDOM.innerHTML = ""

        contatos.forEach((c)=>{
            const div=document.createElement("div")
            div.setAttribute("class","contato")

            const botaoLixeira = document.createElement("button")
            botaoLixeira.setAttribute("class","botao")
            
            const imagem = document.createElement("img")
            imagem.setAttribute("class","diminuir_img")
            imagem.src = "./lixeira.png"
            botaoLixeira.appendChild(imagem)

            div.appendChild(botaoLixeira)

            botaoLixeira.addEventListener("click",()=>{
                div.remove()
            })
            
            const p_nome = document.createElement("p")
            p_nome.innerHTML = c.nome
    
            const p_telefone = document.createElement("p")
            p_telefone.innerHTML = c.telefone
    
            const p_email = document.createElement("p")
            p_email.innerHTML = c.email
    
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            destinoDOM.appendChild(div)
            
        })
    }
}

export default contato