var http = require('http')
const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.writeHead(200, {'content-type':'application/json'});

    let numero = {
        valor: Math.round(Math.random() * 10)
    }
    res.end(JSON.stringify(numero));
})

server.listen(8080);
 