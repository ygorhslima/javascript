class Cxmsg{
    constructor(config){
        this.titulo = config.titulo;
        this.texto = config.texto;
        this.cor = config.cor;
        this.body = document.body;
        this.head = document.head;
        this.divmsg= document.createElement("div");
    }
    
    mostrar=()=>{
        //estilo css da caixa mensagem
        const estilo = `<link rel="stylesheet" href="./componentes/cxmsg.css">`;
        
        
        //config específico de estilos internos do script
        const estilo_tituloCxmsg = `
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width:100%;
            background-color: ${this.cor};
            color:#fff;
            padding:10px;
            border-radius:5px 5px 0px 0px;
        `;

        const estilo_botaoCxmsg = `

            background-color:${this.cor};
            color: #fff;
            padding: 10px 50px;
            border-radius: 5px;
            cursor: pointer;
            text-transform: uppercase;
        `
        this.head.innerHTML += estilo;
        this.divmsg.setAttribute("id","divmsg");
        this.divmsg.setAttribute("class","estilo_divmsg");
        this.body.prepend(this.divmsg);

        const areaCxmsg = document.createElement("div");
        areaCxmsg.setAttribute("class","estilo_areaCxmsg");
        this.divmsg.appendChild(areaCxmsg)


        const tituloCxmsg = document.createElement("div");
        tituloCxmsg.setAttribute("style",estilo_tituloCxmsg);
        tituloCxmsg.innerHTML = this.titulo
        areaCxmsg.appendChild(tituloCxmsg)

        // corpo
        const corpoCxmsg = document.createElement("div");
        corpoCxmsg.setAttribute("class","estilo_corpoCxmsg");
        corpoCxmsg.innerHTML = this.texto;
        areaCxmsg.appendChild(corpoCxmsg);


        //rodape
        const rodapeCxmsg = document.createElement("div");
        rodapeCxmsg.setAttribute("class","estilo_rodapeCxmsg");
        areaCxmsg.appendChild(rodapeCxmsg);

        
        const btn_ok = document.createElement("button");
        btn_ok.setAttribute("style",estilo_botaoCxmsg);
        btn_ok.textContent = "OK";
        rodapeCxmsg.appendChild(btn_ok);
        btn_ok.addEventListener("click",()=>{
            this.ocultar()
        })
        rodapeCxmsg.appendChild(btn_ok)

    }

    ocultar=()=>{
        this.divmsg.remove()
    }
}