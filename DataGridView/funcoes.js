// Função de excluir linha
export function excluirLinha(celula) {
    const linha = celula.closest("tr");
    linha.remove();
}

// Função de editar a linha
export function editarLinha(celula) {
    const linha = celula.closest("tr");
    const celulas = linha.getElementsByTagName("td");

    Array.from(celulas).forEach((td, index) => {
        if (index > 0 && index < celulas.length - 1) {
            const input = document.createElement("input");
            input.value = td.innerText;
            td.innerHTML = ""; // Limpa o conteúdo da célula
            td.appendChild(input); // Adiciona o campo input
        }
    });
}

// Função de visualizar a linha
export function visualizarLinha(celula) {
    const linha = celula.closest("tr");
    const celulas = linha.getElementsByTagName("td");

    // Exibe os dados da linha em algum formato ou modal
    let detalhes = "";
    Array.from(celulas).forEach((td, index) => {
        if (index > 0 && index < celulas.length - 1) { // Ignorando ícones de ação
            detalhes += `
            <p>
                <strong>Coluna ${index}:</strong> ${td.innerText}
            </p>`;
        }
    });

    // Exibir os detalhes em uma área específica ou modal
    document.getElementById("detalhes").innerHTML = detalhes;
}
