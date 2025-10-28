const btn_pesq = document.getElementById("btn_pesq"); // botão de pesquisar
const f_txtpesq = document.getElementById("f_txtpesq"); // input de pesquisa

btn_pesq.addEventListener("click",(evt)=>{
    const valorPesq = f_txtpesq.value;
    
    if(valorPesq == ""){
        alert("informe a pesquisa");
        return;
    }
    const f_pesq = document.querySelector("input[name=f_pesq]:checked").value; // radio buttons

    let endpoint = `http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}/${valorPesq}`;
    fetch(endpoint)
    .then(res=>res.json())
    .them(res=>console.log(res))
});