function* contador(){
    let i=0
    while(true){
        yield i++
        if(i>100){
            break
        }
    }
}
const itc=contador()
for(let i=0;i<100;i++){
    console.log(itc.next().value)
}