// obtendo os dados da api

const btn_gravar = document.querySelector("#btn_gravar")
const btn_cancelar = document.querySelector("#btn_cancelar")

// antes de enviar para api os dados é preciso obter todos os campos
const f_nome = document.querySelector("#f_nome")
const f_celular = document.querySelector("#f_celular")
const f_email = document.querySelector("#f_email")
const f_dtnasc = document.querySelector("#f_dtnasc")


btn_gravar.addEventListener("click",()=>{
    //pegando os valores dos campos
    //montar um json com os dados e passar os dados para o cabeçalho
    const valores = {
        "f_nome":f_nome.value,
        "f_celular": f_celular.value,
        "f_email": f_email.value,
        "f_dtnasc": f_dtnasc.value
    }

    //informações, métodos de trabalho e os dados que serão trabalhados
    const cabecalho = {
        // método de requisição dos dados
        method:"POST",
        body:JSON.stringify(valores)
    }

    const endpoint = "http://127.0.0.1:1880/addcontatos"
    fetch(endpoint, cabecalho)
    .then(res=>{
        if(res.status == 200){
            console.log("OK")
        }else{
            alert("Erro ao gravar novo contato")
        }
    })

    console.log(valores)

})
