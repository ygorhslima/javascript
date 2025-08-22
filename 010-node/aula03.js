const http = require("http");
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((requisicao, resposta)=>{
    resposta.writeHead(200,{'content-type':'text/html'})

    if(requisicao.url == "/"){
        resposta.write("<h1>seja bem vindo</h1>")
    }else if(requisicao.url == "/canal"){
        resposta.write("<h1>CFB Cursos</h1>")
    }else if(requisicao.url == '/curso'){
        resposta.write('<h1>Curso de node</h1>')
    }
    resposta.end()
})

servidor.listen(porta,host,()=>{
    console.log('servidor rodando...')
})