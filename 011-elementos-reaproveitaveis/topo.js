// obtendo o head e o body
const head = document.head;
const body = document.body;
// link do estilo
const estilo = `<link rel="stylesheet" type="text/css" href="topo.css">`;
// adicionando o link do estilo no head
head.innerHTML += estilo;

const topo = document.createElement("div");
topo.setAttribute("id","topo");
topo.setAttribute("class","topo");

// adicionando no início do site
body.prepend(topo)

// criação de um logo

const logo = `
    <div id="logo" class="logo">
        <img src="Wikimedia-logo.png" alt="logo">
    </div>
`;

const login = `
    <div id="login" class="login">
        <p id="matricula">Matricula: <span></span></p>
        <p id="nome">Nome: <span></span></p>
    </div> 
`;

topo.innerHTML += logo;
topo.innerHTML += login