
const conectar = async () =>{
    if(global.conexao && global.conexao.state !== 'disconnect'){
        return global.conexao
    }
    const mysql = require("mysql2/promise")

    const conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        pass: "",
        database: "BD_clientes"
    }) 
    global.conexao = conexao
    return conexao
}

const InserirClientes = async (cliente) =>{
    const con = await conectar()
    const sql = "INSERT INTO cliente_node(nome,idade) VALUES (?,?)";
    const valores = [cliente.nome, cliente.idade]
    await con.query(sql, valores)
}

const todosClientes = async ()=>{
    const con = await conectar()
    const[linha] = await con.query('SELECT * FROM cliente_node')
    return await linha
}

module.exports = {todosClientes, InserirClientes}