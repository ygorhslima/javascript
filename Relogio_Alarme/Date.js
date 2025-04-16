// definição das constantes 
//------------------------------------------------------
const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
//--------------------------------------------------------

let som_alarme = new Audio("Alarme.mp3")
som_alarme.loop = -1

let ts_atual = null // quando ativar o alarme, ele vai pegar o tempo atual e vai colocar neste var
let ts_alarme = null // o ts_atual somado com o tempo do alarme
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click",()=>{
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tmp_alarme.value*1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML="Hora do Alarme: " + dt_alarme.getHours() + ":" + dt_alarme.getMinutes() + ":" + dt_alarme.getSeconds()
})

btn_parar.addEventListener("click",()=>{
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML="Hora do Alarme:"
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime = 0
})


const timer = document.getElementById("timer")
const data = new Date()

let dia = data.getDate()
if (dia < 10) {
    dia = "0" + dia
}

let mes = data.getMonth() + 1 // Adicionado 1 porque getMonth() retorna o mês base 0
if (mes < 10) {
    mes = "0" + mes
}

const data_r = dia + "/" + mes + "/" + data.getFullYear()
div_data.innerHTML = data_r

const relogio = () => {
    const data = new Date()
    
    let hora = data.getHours()
    if (hora < 10) {
        hora = "0" + hora
    }
    
    let minuto = data.getMinutes()
    if (minuto < 10) {
        minuto = "0" + minuto
    }
    
    let segundos = data.getSeconds()
    if (segundos < 10) {
        segundos = "0" + segundos
    }
    
    const hora_completa = hora + ":" + minuto + ":" + segundos
    div_relogio.innerHTML = hora_completa

    // se o alarme estiver ativado e não estiver tocando
    if(alarme_ativado && !alarme_tocando){
        // se o timestamp atual for maior ou igual ao timestamp do alarme, preciso tocar o alarme 
        if(data.getTime() >= ts_alarme){
            // alarme tocando para true
            alarme_tocando = true
            // vai dá o play no som do alarme
            som_alarme.play()
            // vai formatar o background para vermelho
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(relogio, 1000)
