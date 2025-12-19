type Order = {
    productId:string;
    price:number;
}

type User = {
    firtsName:string;
    age:number;
    email:string;
    password:string;
    orders: Order[]
}

const user:User = {
    firtsName:"Jane",
    age:20,
    email:"jane@email.com",
    password:"123",
    orders:[{productId:"1",price:200}]
}

const listFuncionarios:User[] = [
    {
        firtsName:"Jane",
        age:20,
        email:"jane@email.com",
        password:"123",
        orders:[{productId:"1",price:200}]
    },
    {
        firtsName:"João",
        age:25,
        email:"joao@email.com",
        password:"1234314",
        orders:[{productId:"2",price:700}]
    }
] 

for(let l of listFuncionarios){
    console.log(l)
}

const n:number[] = []


// União de tipos - union types
/*
const u:Order & User = {
    firtsName:"Jane",
    age:20,
    email:"jane@email.com",
    password:"123",
    orders:[{productId:"1",price:200}],
    price:500,
    productId:"2"
}
*/