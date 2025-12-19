var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayMyName = function () {
        return this.name;
    };
    return Person;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(id, name, age) {
        return _super.call(this, id, name, age) || this;
    }
    Aluno.prototype.Estudar = function () {
        return "Estudando...";
    };
    return Aluno;
}(Person));
var person = new Person(10, "joao", 20);
var a1 = new Aluno(5, "gustavo", 25);
console.log(person.sayMyName());
console.log(a1.Estudar());
