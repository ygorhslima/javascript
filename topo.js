const body=document.body;

const estiloTopo = `
    display: flex;
    justify-content:space-between;
    align-items:center;
    background-color:#00f;
`;

const estilo_img_logo = `width:200px;`;
const topo = document.createElement("div");
topo.setAttribute("id","topo");
topo.setAttribute("style",estiloTopo);
body.prepend(topo);


const logo =
`<div id='logo' class='logo'>
    <img src='logo-js.png' title='CFBcursos_javascript' style='${estilo_img_logo}'>
</div>`;

topo.innerHTML += logo;

const login = 
`<div id='login' class='login'>
    <p id='matricula'>Matricula:<span></span></p>
    <p id='nome'>Nome:<span></span></p>
</div>`;

topo.innerHTML +=login;