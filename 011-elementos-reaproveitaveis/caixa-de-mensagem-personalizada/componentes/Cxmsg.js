class Cxmsg {
  static titulo = "";
  static texto = "";
  static cor = "";
  static divmsg = null;

  static ConfiguracoesBOX(titulo, texto, cor) {
    Cxmsg.titulo = titulo;
    Cxmsg.texto = texto;
    Cxmsg.cor = cor;

    const body = document.body;

    /**AREA DE ESTILOS */
    const estilo_divmsg = `
      display:flex;
      justify-content:center;
      align-items:center;
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100vh;
      background-color:rgba(0,0,0,0.7);
    `;

    const estilo_areaCxmsg = `
      display:flex;
      flex-direction:column;
      width:400px;
    `;

    const estilo_tituloCxmsg = `
      background-color:${Cxmsg.cor};
      color:#fff;
      padding:10px;
      border-radius:5px 5px 0 0;
    `;

    const estilo_corpoCxmsg = `
      background-color:#eee;
      padding:20px;
      color:#000;
    `;

    const estilo_rodapeCxmsg = `
      background-color:#ccc;
      padding:10px;
      text-align:right;
      border-radius:0 0 5px 5px;
    `;

    const estilo_botaoCxmsg = `
      background-color:${Cxmsg.cor};
      color:#fff;
      border:none;
      padding:10px 20px;
      cursor:pointer;
      border-radius:5px;
    `;

    /**-------------------------------------------------------------------------------------------------------------------------- */
    
    Cxmsg.divmsg = document.createElement("div");
    Cxmsg.divmsg.setAttribute("style", estilo_divmsg);

    Cxmsg.divmsg.innerHTML = `
      <div style="${estilo_areaCxmsg}">
        <div style="${estilo_tituloCxmsg}">${Cxmsg.titulo}</div>
        <div style="${estilo_corpoCxmsg}">${Cxmsg.texto}</div>
        <div style="${estilo_rodapeCxmsg}">
          <button id="btn_ok" style="${estilo_botaoCxmsg}">OK</button>
        </div>
      </div>
    `;

    body.appendChild(Cxmsg.divmsg);

    Cxmsg.divmsg.querySelector("#btn_ok").addEventListener("click", () => {
      Cxmsg.ocultar();
    });
  }

  static ocultar() {
    if (Cxmsg.divmsg) {
      Cxmsg.divmsg.remove();
      Cxmsg.divmsg = null;
    }
  }
}

export { Cxmsg };
