import { excluirLinha, editarLinha, visualizarLinha } from './funcoes.js';

const configDGV = {
    endpoint: "http://localhost:3000/dados", // A ROTA QUE ESTÃO OS DADOS RETORNADOS EM JSON QUE VEM DIRETAMENTE DO BANCO DE DADOS
    idDestino: "dgv_dados",
}

const DataGridView = (configDGV) => {
    const dgvDados = document.getElementById(configDGV.idDestino);
    dgvDados.innerHTML = "";

    // Buscando os dados do endpoint
    fetch(configDGV.endpoint)

        .then((res) => {
            console.log(`Resposta do servidor:`, res);
            // A linha abaixo deve retornar a Promise do .json() corretamente
            return res.json(); // Corrigido para retornar o JSON
        })
    
        .then((res) => {
            console.log('Dados recebidos:', res);
            // Iterando sobre os dados recebidos
            res.forEach(element => {
                const dgvLinha = document.createElement("tr");
                dgvLinha.setAttribute("class", "dgvLinha");

                // Definindo as colunas
                const colunas = ["n_id_produto", "s_nome_produto", "s_marca_produto", "s_modelo_produto"];

                // Criando as colunas dinamicamente com base na array `colunas`
                colunas.forEach(chave => {
                    const coluna = document.createElement("td");
                    coluna.classList.add(`c${chave}`);
                    coluna.textContent = element[chave];
                    dgvLinha.appendChild(coluna);
                });

                const c5 = document.createElement("td");
                c5.setAttribute("class", "c5");
                dgvLinha.appendChild(c5);
                /**
                 * 
                 * O array icones contém objetos com as informações dos ícones (o caminho da imagem, a classe e o texto alternativo alt).
                 */

                const icones = [  
                    {
                        src:"./svg/deletar.svg",
                        className: "dgvIcone",
                        alt:"Excluir",
                        action: excluirLinha
                    },
                    {
                        src:"./svg/editar.svg",
                        className: "dgvIcone",
                        alt:"Editar",
                        action: editarLinha
                    },
                    {
                        src:"./svg/exibir.svg",
                        className: "dgvIcone",
                        alt:"Exibir",
                        action: excluirLinha
                    }
                ]
                /*
                    criando os ícones dinamicamente
                */
               icones.forEach((icone)=>{
                    const img = document.createElement("img");
                    img.setAttribute("class",`${icone.className}`);
                    img.setAttribute("src",`${icone.src}`);
                    img.setAttribute("alt",`${icone.alt}`);
                    /**
                     * evento de clique das imagens
                     */
                    img.addEventListener("click",()=>{
                        icone.action(c5);
                    })
                    c5.appendChild(img);
               })

                // Adicionando a linha ao DataGridView
                dgvDados.appendChild(dgvLinha);
            });
        })
        .catch((error) => {
            console.error("Erro ao carregar dados:", error);
        });
}
DataGridView(configDGV);