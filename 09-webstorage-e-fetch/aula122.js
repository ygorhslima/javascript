const p_texto = document.getElementById("p_texto");
const btn_texto = document.getElementById("btn_texto");

const endpoint = "http://localhost:8080"

const res = fetch(endpoint)
.then(res=>res.text())
.then(dados=>{
    console.log(dados)
});