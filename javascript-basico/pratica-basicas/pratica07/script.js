function Verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var FormularioAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (FormularioAno.value.length == 0 || Number(FormularioAno.value) > ano){
        window.alert('[ERRO] vefifique os dados e tente novamente')
    } else {
        
        var FormularioSexo = document.getElementsByName('radsex')
        var idade = ano - Number(FormularioAno.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')
        if (FormularioSexo[0].checked){
            genero = 'homem'

            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/foto-bebe-menino.png')
            } else if (idade < 21){
                img.setAttribute('src', 'img/foto-jovem-homem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto-homem.png')
            } else {
                img.setAttribute('src', 'img/foto-homem-idoso.png')
            }
        } else if (FormularioSexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/foto-bebe-menina.png')
            } else if (idade < 21){
                img.setAttribute('src', 'img/foto-jovem-mulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/foto-mulher.png')
            } else {
                img.setAttribute('src', 'img/foto-mulher-idosa.png')
            }
        }
        img.style.display = "block"
        img.style.margin = "auto"

        res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos'
        res.appendChild(img)
    }
}