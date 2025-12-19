let age:number = 10;
let firtsName:string = "Ygor";
let isValid:boolean = true;

const ids:number[] = [10,20,30,40,50];
const boolean:boolean[] = [true,false,true,false];
const peaples:string[] = ["felipe","joao"];

// uma tupla
const tupla: [number, string] = [1,""];

// lista de tuplas
const tupla2:[number, string][] = [
    [1,'joao'],
    [2,'maria']
];

// intersections: quando quero que uma variável possua um tipo ou outro
const productId:number | string = "joao";

// Enums

enum Direction {
    Up = 1,
    Down = 2
}

const direction = Direction.Up
console.log(direction)