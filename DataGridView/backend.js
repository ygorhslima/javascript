/**
 * importando as bibliotecas necessárias para conexão com o banco de dados
 */
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Corrigido para usar o middleware corretamente
app.use(express.json()); // Corrigido para usar express.json() corretamente

const db = mysql.createConnection({
    host: "localhost",  // Corrigido de "db" para "host"
    user: "root",
    password: "",       // Corrigido de "pass" para "password"
    database: "cursojavascript"
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados!');
    }
});

/*criando uma rota de requisição GET onde vai estar os dados*/
app.get('/dados', (req, res) => {
    /**
     * fazendo uma consulta SQL onde vai ser mostrado a tabela produto inteira
     */
    db.query('SELECT n_id_produto, s_nome_produto, s_marca_produto, s_modelo_produto FROM produto', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar dados', details: err });
        } else {
            res.json(results); // Envia os dados no formato correto
        }
    });
});


// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});