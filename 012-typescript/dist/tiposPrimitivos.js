var age = 10;
var firtsName = "Ygor";
var isValid = true;
var ids = [10, 20, 30, 40, 50];
var boolean = [true, false, true, false];
var peaples = ["felipe", "joao"];
// uma tupla
var tupla = [1, ""];
// lista de tuplas
var tupla2 = [
    [1, 'joao'],
    [2, 'maria']
];
// intersections: quando quero que uma variável possua um tipo ou outro
var productId = "joao";
// Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
var direction = Direction.Up;
console.log(direction);
