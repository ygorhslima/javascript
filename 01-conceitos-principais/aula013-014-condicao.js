let num = 3
if(num > 10){
    console.log(`${num} maior que 10`)
}else if (num < 10){
    console.log(`${num} é menor que 10`)
}else{
    console.log(`${num} é igual a 10`)
}


let colocacao=1

switch (colocacao){
    case 1:
        console.log("primeiro lugar");
        break;
    case 2:
        console.log("segundo lugar");
        break;
    case 3:
        console.log("terceiro lugar");
        break;
    default:
        console.log("não subiu ao pódio");
        break;
}