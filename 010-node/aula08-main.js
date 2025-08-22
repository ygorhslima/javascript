(async ()=>{
    const db = require("./aula08.js")
    await db.InserirClientes(
        {
            nome: "joana",
            idade:32
        }
    );
 
    console.log("obter todos os clientes")
    const clientes = await db.todosClientes()
    console.log(clientes)
})();