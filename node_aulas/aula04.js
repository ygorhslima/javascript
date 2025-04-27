const http = require('http')
const fs = require('fs')
const porta = process.env.PORT || 3000

const server = http.createServer((req,res)=>{
    fs.readFile('index.html',(err,arquivo)=>{
        res.writeHead(200,{'content-type':'text/html'})
        res.write(arquivo)
        return res.end()
    })
})

server.listen(porta || 3000, ()=>{
    console.log("rodando na porta http://localhost:3000")
})