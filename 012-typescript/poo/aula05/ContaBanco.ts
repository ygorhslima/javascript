export class ContaBanco{
    private numConta:number=0;
    private tipo:string="";
    private dono:string="";
    private saldo:number=0.0;
    private status:boolean=false;

    public constructor(){
        this.saldo = 0.0;
        this.status = false;
    }
    public getNumConta():number{
        return this.numConta;
    }
    public setNumConta(numConta:number):void{
        this.numConta = numConta;
    }
    private getTipo():string{
        return this.tipo;
    }
    private setTipo(tipo:string):void{
        this.tipo = tipo;
    }
    public getDono():string{
        return this.dono;
    }
    public setDono(dono:string):void{
        this.dono = dono;
    }
    private getSaldo():number{
        return this.saldo;
    }
    private setSaldo(saldo:number):void{
        this.saldo = saldo;
    }
    private getStatus(){
        return this.status;
    }
    private setStatus(status:boolean):void{
        this.status = status;
    }

    public mostrarDados():string{
        return `
            numConta: ${this.getNumConta()}
            tipo: ${this.getTipo()}
            dono: ${this.getDono()}
            saldo:${this.getSaldo()}
            status:${this.getStatus()}
        `
    }

    public abrirConta(tipo:string):void{
        this.setTipo(tipo);
        this.setStatus(true);
        if(tipo == "cc"){
            this.setSaldo(50);
        }else if(tipo == "cp"){
            this.setSaldo(150);
        }
    }
    public fecharConta():void{
        if(this.getSaldo() > 0){
            console.log("conta com dinheiro");
        }else if(this.getSaldo() < 0){
            console.log("conta em débito");
        }else{
            this.setStatus(false);
        }
    }
    public depositar(valor:number):void{
        if(this.getStatus() == true){
            this.setSaldo(this.getSaldo() + valor);
        }else{
            console.log("impossível depositar");
        }
    }
    public sacar(valor:number):void{
        if(this.getStatus() == true){
            if(this.getSaldo() > valor){
                this.setSaldo(this.getSaldo() - valor);
            }else{
                console.log("saldo insuficiente");
            }
        }else{
            console.log("impossível sacar");
        }
    }
    public pagarMensalidade(): void {
        let valor: number;

        if (this.getTipo() === "cc") {
            valor = 12;
        } else if (this.getTipo() === "cp") {
            valor = 20;
        } else {
            console.log("Tipo de conta inválido!");
            return;
        }

        if (this.getStatus()) {
            if (this.getSaldo() >= valor) {
                this.setSaldo(this.getSaldo() - valor);
                console.log(`Mensalidade de R$${valor} paga com sucesso!`);
            } else {
                console.log("Saldo insuficiente para pagar mensalidade.");
            }
        } else {
            console.log("Impossível pagar, conta fechada.");
        }
    }

}
