let btn_texto =document.getElementById("btn_texto");
let p_result = document.getElementById("p_result");

btn_texto.addEventListener("click",()=>{
    const endpoint = "https://18f34bfc-be08-48f6-9dbd-e74a9c261255-00-1mab90teocwuo.riker.replit.dev/";

    fetch(endpoint)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
        p_result.innerHTML = `temperatura: ${ret.temp}, Pressão: ${ret.pressao}, nível: ${ret.nivel}`
    })
})