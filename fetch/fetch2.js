const texto = document.getElementById("texto");
const endpoint = "./texto.txt";
fetch(endpoint)
.then(res=>res.text())
.then(res=>{
    res=JSON.parse(res)

    texto.innerHTML += `${res.msg}<br>`
    texto.innerHTML += `${res.nome}<br>`
    texto.innerHTML += `${res.idade}`
})
