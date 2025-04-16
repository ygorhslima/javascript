function Carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`

    // se a hora estiver entre meia noite e meio dia vai mostrar uma imagem de manhã e uma cor diferente
    if (hora >= 0 && hora < 12){
        img.src = 'img/foto_de_manha.png'
        document.body.style.background = '#a3835e'
    } 

    // se a hora estiver entre meio dia e antes de 6 da noite vai mostrar uma imagem da tarde e uma cor diferente
    else if (hora >= 12 && hora < 18){
        img.src = 'img/foto_de_tarde.png'
        document.body.style.background = '#d27f64'
    } 
    
    else {
        img.src = 'img/foto_de_noite.png'
        document.body.style.background = '#296470'
    }
}