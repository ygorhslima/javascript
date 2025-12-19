function getFirtsValue<Type>(array:Type[]){
    return array[0]
}

const f1 = getFirtsValue<string>(["1","2"]);
const f2 = getFirtsValue<number>([1,2]);

const returnPromise = async():Promise<string> => {
    return "5";
}