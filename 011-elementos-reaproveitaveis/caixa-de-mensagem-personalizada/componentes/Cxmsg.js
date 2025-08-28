class Cxmsg{
    titulo=null
    texto=null
    constructor(config){
        this.cor = config.cor;
        this.body = document.body;
        this.head = document.head;
        this.divmsg= document.createElement("div");
    }
    
    mostrar=(titulo,texto)=>{
        this.titulo = titulo;
        this.texto = texto;
        // estilo externo
        const estilo = `<link rel="stylesheet" href="./componentes/cxmsg.css">`;
        this.head.innerHTML += estilo;

        // estilos internos
        const estilo_tituloCxmsg = `
            display:flex;
            justify-content:flex-start;
            align-items:center;
            width:100%;
            background-color:${this.cor};
            color:#fff;
            padding:10px;
            border-radius:5px 5px 0px 0px;
        `;
        const estilo_botaoCxmsg = `
            background-color:${this.cor};
            color:#fff;
            padding:10px 50px;
            border-radius:5px;
            cursor:pointer;
            text-transform:uppercase;
        `;

        this.divmsg.setAttribute("id","divmsg");
        this.divmsg.setAttribute("class","estilo_divmsg");
        this.body.prepend(this.divmsg);

        // aqui já injetamos todo HTML usando template string
        this.divmsg.innerHTML = `
            <div class="estilo_areaCxmsg">
                <div style="${estilo_tituloCxmsg}">${this.titulo}</div>
                <div class="estilo_corpoCxmsg">${this.texto}</div>
                <div class="estilo_rodapeCxmsg">
                    <button id="btn_ok" style="${estilo_botaoCxmsg}">OK</button>
                </div>
            </div>
        `;

        // evento do botão
        this.divmsg.querySelector("#btn_ok").addEventListener("click",()=>{
            this.ocultar();
        });
    }

    ocultar=()=>{
        this.divmsg.remove();
    }
}
