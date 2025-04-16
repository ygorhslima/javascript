
//Stringconst senha = '123'
const iterador_senha = senha[Symbol.iterator]()

for (let tamanho_senha = senha.length; tamanho_senha > 0; tamanho_senha--){
    const senha_atual = iterador_senha.next().value

    if(isNaN(Number(senha_atual)) || senha_atual == ''){
        console.log('só é possível criar uma senha com apenas números')
    }
    if (tamanho_senha === 1){
        console.log('ok!')
    }    
}