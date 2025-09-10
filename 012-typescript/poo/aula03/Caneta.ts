export class Caneta{
    public nome:string = "";
    public cor:string = "";
    private ponta:number = 0.0;
    protected carga:number = 0;
    protected tampada:boolean = false;

    public rabiscar():void{
        if(this.tampada == true){
            console.log("erro");
        }else{
            console.log("Rabisco");
        }
    }
    public tampar():void{
        this.tampada = true;
    }
    public destampar():void{
        this.tampada = false;
    } 
    public mostrarDados():string{
        return `
            Modelo: ${this.nome}
            cor: ${this.cor}
            ponta: ${this.ponta}
            carga: ${this.carga}
            está tampada?: ${this.tampada ? "sim":"não"}
        `
    }
}