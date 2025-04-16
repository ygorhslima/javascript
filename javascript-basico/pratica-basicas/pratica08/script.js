function Contar(){

    let ini = document.getElementById('inicioN')
    let fim = document.getElementById('fimN')
    let passo = document.getElementById('passoN')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0){
        window.alert('[EERRO] faltam dados')
    }else{

        res.innerHTML = 'contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p<=0){
            window.alert("[ERRO] passo inválido! considerando PASSO 1")
            p = 1
        }

        if(i < f){
            // contagem crescente
            for(let c=i; c <= f; c += p){
                res.innerText += `${c}\u{27A1}`
            }
        } else {
            // contagem decrescente
            for(let c=i; c >= f; c -= p){
                res.innerHTML += `${c}\u{27A1}`
            }
        }
        res.innerHTML += `\u{1F6A9}`
    }
}