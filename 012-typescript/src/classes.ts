interface IPerson{
    sayMyName():string;
}

class Person implements IPerson{
    protected id:number;
    protected name:string;
    protected age:number;

    constructor(id:number,name:string,age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return this.name
    }
}


class Aluno extends Person{
    constructor(id:number, name:string, age:number){
        super(id,name,age)
    }
    Estudar():string{
        return "Estudando..."
    }
}

const person = new Person(10, "joao",20);
const a1 = new Aluno(5,"gustavo",25);
console.log(person.sayMyName())
console.log(a1.Estudar())