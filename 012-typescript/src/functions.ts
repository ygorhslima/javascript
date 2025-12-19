interface MathFunc{
    (x:number,y:number):number;
}

const sum:MathFunc = (x:number,y:number)=>{
    return x+y;
}

const sub:MathFunc = (x:number, y:number)=>{
    return x-y;
}

const value = sum(10,80);
console.log(value)

const messageFunc = (message:string):void =>{
    console.log(message);
}
messageFunc("hello");

