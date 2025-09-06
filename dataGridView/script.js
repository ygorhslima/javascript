const dgvDados = document.getElementById("dgvDados");
const btnAdd = document.getElementById("btn_add_produto");

function carregarProdutos() {
    dgvDados.innerHTML = ""; // limpa tabela
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    produtos.forEach((el, index) => {
        const dgvLinha = document.createElement("tr");

        dgvLinha.innerHTML = `
            <td class="c1">${index + 1}</td>
            <td class="c2">${el.nome}</td>
            <td class="c3">${el.marca}</td>
            <td class="c4">${el.modelo}</td>
            <td class="c5">
                <i class="fa-solid fa-trash" style="cursor:pointer" onclick="deletarProduto(${index})"></i>
                <i class="fa-solid fa-pen" style="cursor:pointer" onclick="editarProduto(${index})"></i>
                <i class="fa-solid fa-eye" style="cursor:pointer" onclick="visualizarProduto(${index})"></i>
            </td>
        `;

        dgvDados.appendChild(dgvLinha);
    });
}

btnAdd.addEventListener("click", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome_produto").value;
    const marca = document.getElementById("marca_produto").value;
    const modelo = document.getElementById("modelo_produto").value;

    if (!nome || !marca || !modelo) {
        alert("Preencha todos os campos!");
        return;
    }

    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    produtos.push({ nome, marca, modelo });

    localStorage.setItem("produtos", JSON.stringify(produtos));

    document.getElementById("nome_produto").value = "";
    document.getElementById("marca_produto").value = "";
    document.getElementById("modelo_produto").value = "";

    carregarProdutos();
});

function deletarProduto(index) {
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    produtos.splice(index, 1);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    carregarProdutos();
}

function editarProduto(index) {
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    const produto = produtos[index];

    document.getElementById("nome_produto").value = produto.nome;
    document.getElementById("marca_produto").value = produto.marca;
    document.getElementById("modelo_produto").value = produto.modelo;

    deletarProduto(index); // remove para depois adicionar novamente atualizado
}

function visualizarProduto(index) {
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    const produto = produtos[index];
    alert(`Produto: ${produto.nome}\nMarca: ${produto.marca}\nModelo: ${produto.modelo}`);
}

// inicializa tabela
carregarProdutos();
