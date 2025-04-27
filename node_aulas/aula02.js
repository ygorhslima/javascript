let http = require('http');

const server = http.createServer((requisicao,resposta)=>{
    resposta.writeHead(200,{'content-type':'text/plain'})
    resposta.write('CFBcursos\n')
    resposta.end()
})

server.listen(3000, ()=>{
    console.log("servidor rodando em http://localhost:3000")
})