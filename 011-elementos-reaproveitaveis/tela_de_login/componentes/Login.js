class Login{
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static endpoint = 'https://89a585ef-cc88-49cf-b525-f07bb636e689-00-3lxed8x9462ox.janeway.replit.dev/';
    //exemplo; 'https://89a585ef-cc88-49cf-b525-f07bb636e689-00-3lxed8x9462ox.janeway.replit.dev/?matricula=123&senha=321'
    static Configlogin=(mat,pass)=>{
        this.endpoint += `?matricula=${mat}&senha=${pass}`;
        fetch(this.endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado = true;
                this.matlogado = mat;
                this.nomelogado = res.nome;
                this.acessologado = res.acesso;
                console.log(res);
            }
            else{
                console.log("usuário não encontrado")
            }
        });
    }
}
export {Login};