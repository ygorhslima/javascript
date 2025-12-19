var user = {
    firtsName: "Jane",
    age: 20,
    email: "jane@email.com",
    password: "123",
    orders: [{ productId: "1", price: 200 }]
};
var listFuncionarios = [
    {
        firtsName: "Jane",
        age: 20,
        email: "jane@email.com",
        password: "123",
        orders: [{ productId: "1", price: 200 }]
    },
    {
        firtsName: "João",
        age: 25,
        email: "joao@email.com",
        password: "1234314",
        orders: [{ productId: "2", price: 700 }]
    }
];
for (var _i = 0, listFuncionarios_1 = listFuncionarios; _i < listFuncionarios_1.length; _i++) {
    var l = listFuncionarios_1[_i];
    console.log(l);
}
