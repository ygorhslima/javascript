let p_temp = document.getElementById("p_temp");
let p_nivel = document.getElementById("p_nivel");
let p_press = document.getElementById("p_press");

const endpoint = "https://18f34bfc-be08-48f6-9dbd-e74a9c261255-00-1mab90teocwuo.riker.replit.dev/";

fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
    p_temp.innerHTML = `temperatura: ${dados.temp}`
    p_nivel.innerHTML = `Nível: ${dados.niveL}`
    p_press.innerHTML = `Pressão: ${dados.pressao}`
})