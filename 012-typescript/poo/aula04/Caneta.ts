export class Caneta{
    public nome:string = "";
    public cor:string = "";
    private ponta:number = 0.0;
    protected carga:number = 0;
    protected tampada:boolean = false;

    public setNome(nome:string):void{
        this.nome = nome;
    }

    public getNome():string{
        return this.nome;
    }
    public setCor(cor:string):void{
        this.cor=cor;
    }
    public getCor():string{
        return this.cor;
    }
    public setPonta(ponta:number):void{
        this.ponta = ponta;
    }

    public getPonta():number{
        return this.ponta;
    }
    public setCarga(carga:number):void{
        this.carga = carga;
    }
    public getCarga():number{
        return this.carga;
    }

    public setTampada(tampada:boolean):void{
        this.tampada = tampada;
    }
    public getTampada():boolean{
        return this.tampada;
    }

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
            Modelo: ${this.getNome()}
            cor: ${this.getCor()}
            ponta: ${this.getPonta()}
            carga: ${this.getCarga()}
            está tampada?: ${this.getTampada() ? "sim":"não"}
        `
    }
}