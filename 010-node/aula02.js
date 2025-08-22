const http = require("http")

const server = http.createServer((requisicao,resposta)=>{
    resposta.writeHead(200, {'content-type':'text/plain'});
    resposta.write("olá mundo\n");
    resposta.end();
})

server.listen(1337, ()=>{
    console.log("servidor rodando....")
});