class Login{
    static logado=false;
    static matlogado=null;
    static nomelogado=null;
    static acessologado=null;
    static estilocss=null;
    static config={
        cor:"048",
        img:"./logo.png"
    };
    static endpoint="https://72cb222e-1512-4d72-bb6c-3af8a74d6a4f-00-3a9bsrswkvfme.worf.replit.dev/";

    static login=(mat,pas,config=null)=>{
        if(config!=null){
            this.config=config;
        }
        this.endpoint+=`?matricula=${mat}&senha=${pas}`;
        this.estilocss=
        ".fundoLogin{display:flex; justify-content:center; align-items:center; width:100%; height:100vh; position:absolute; top:0px; left:0px; background-color:rgba(0,0,0,0.75); box-sizing:border-box;}"+
        ".baseLogin{display: flex; justify-content:center; align-items:stretch; width:50%; box-sizing:inherit;}"+
        ".elementosLogin{display:flex; justify-content:center; align-items:flex-start; flex-direction:column; width:50%; background-color:#eee; padding:10px; border-radius:10px 0px 0px 10px; box-sizing:inherit;}"+
        ".logoLogin{display:flex; justify-content:center; align-items:center; width:50%; background-color:#bbb; padding:10px; border-radius:0px 10px 10px 0px; box-sizing:inherit;}"+
        ".logoLogin img{width:90%; box-sizing:inherit;}"+
        ".campoLogin{display:flex; justify-content:flex-start; align-items:flex-start; flex-direction:column; box-sizing:inherit; margin-bottom:10px;}"+
        ".campoLogin label{font-size:18px;}"+
        ".campoLogin input{font-size:18px; padding:5px; background-color:#fff; border-radius:5px;}"+
        ".botoesLogin{display:flex; justify-content:space-around; align-items:center; width:100%; box-sizing:inherit;}"+
        `.botoesLogin button{cursor:pointer; background-color:${this.config.cor}; color:#fff; border-radius:5px; padding:10px; width:100px; box-sizing:inherit;}`

        const styleEstilo=document.createElement("style");
        styleEstilo.setAttribute("id","id_estiloLogin");
        styleEstilo.setAttribute("rel","stylesheet");
        styleEstilo.setAttribute("type","text/css");
        styleEstilo.innerHTML=this.estilocss;
        document.head.appendChild(styleEstilo);

        const fundoLogin=document.createElement("div");
        fundoLogin.setAttribute("id","fundoLogin");
        fundoLogin.setAttribute("class","fundoLogin");
        document.body.prepend(fundoLogin);

        const baseLogin=document.createElement("div");
        baseLogin.setAttribute("id","baseLogin");
        baseLogin.setAttribute("class","baseLogin");
        fundoLogin.appendChild(baseLogin);

        const elementosLogin=document.createElement("div");
        elementosLogin.setAttribute("id","elementosLogin");
        elementosLogin.setAttribute("class","elementosLogin");
        baseLogin.appendChild(elementosLogin);        

        const campoLoginUsername=document.createElement("div");
        campoLoginUsername.setAttribute("id","campoLoginUsername");
        campoLoginUsername.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginUsername);

        const labelUsername=document.createElement("label");
        labelUsername.innerHTML="Username";
        campoLoginUsername.appendChild(labelUsername);

        const inputUsername=document.createElement("input");
        inputUsername.setAttribute("id","f_username");
        inputUsername.setAttribute("type","text");
        inputUsername.setAttribute("name","f_username");
        campoLoginUsername.appendChild(inputUsername);

        const campoLoginSenha=document.createElement("div");
        campoLoginSenha.setAttribute("id","campoLoginSenha");
        campoLoginSenha.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginSenha);

        const labelSenha=document.createElement("label");
        labelSenha.innerHTML="Senha";
        campoLoginSenha.appendChild(labelSenha);

        const inputSenha=document.createElement("input");
        inputSenha.setAttribute("id","f_senha");
        inputSenha.setAttribute("type","password");
        inputSenha.setAttribute("name","f_senha");
        campoLoginSenha.appendChild(inputSenha);

        const botoesLogin=document.createElement("div");
        botoesLogin.setAttribute("class","botoesLogin");
        elementosLogin.appendChild(botoesLogin);

        const btn_login=document.createElement("button");
        btn_login.setAttribute("id","btn_login");
        btn_login.innerHTML="Login";
        elementosLogin.appendChild(btn_login);

        const btn_cancelar=document.createElement("button");
        btn_cancelar.setAttribute("id","btn_cancelar");
        btn_cancelar.innerHTML="Cancelar";
        elementosLogin.appendChild(btn_cancelar);

        const logoLogin=document.createElement("div");
        logoLogin.setAttribute("id","logoLogin");
        logoLogin.setAttribute("class","logoLogin");
        baseLogin.appendChild(logoLogin);

        const imgLogoLogin=document.createElement("img");
        imgLogoLogin.setAttribute("src",this.config.img);
        imgLogoLogin.setAttribute("title","CFBCursos");
        logoLogin.appendChild(imgLogoLogin);


        // <div id="fundoLogin" class="fundoLogin"> OK
        //     <div di="baseLogin" class="baseLogin"> OK
        //         <div id="elementosLogin" class="elementosLogin"> OK
        //             <div class="campoLogin"> OK
        //                 <label>Username</label> OK
        //                 <input type="text" name="f_username" id="f_username"> OK
        //             </div>
        //             <div class="campoLogin"> OK
        //                 <label>Senha</label> OK
        //                 <input type="password" name="f_senha" id="f_senha"> OK
        //             </div>
        //             <div class="botoesLogin"> OK
        //                 <button id="btn_login">Login</button> OK
        //                 <button id="btn_cancelar">Cancelar</button> OK
        //             </div>                                                
        //         </div>
        //         <div id="logoLogin" class="logoLogin">
        //             <img src="./logo.png" title="CFBCursos">
        //         </div>          
        //     </div>
        // </div>


        




        // fetch(this.endpoint)
        // .then(res=>res.json())
        // .then(res=>{
        //     if(res){
        //         this.logado=true;
        //         this.matlogado=mat;
        //         this.nomelogado=res.nome;
        //         this.acessologado=res.acesso;
        //         console.log(res)
        //     }else{
        //         console.log("Usuário não encontrado");
        //     }
        // })
    }
}
export {Login};