const soma=(...valores)=>{
    const somar=(val)=>{
        let res = 0
        /**iterando cada valor dentro da array valores, 
         * que neste caso é o parâmetro val que é a entrada para o array */
        for(v of val){
            res += v
        }
        return res
    }
    return somar(valores)
}

console.log(soma(10,5,15))