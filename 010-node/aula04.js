const express = require("express");
const app = express();
const porta = process.env.PORT;

app.get("/",(requisicao, resposta)=>{
    resposta.send("seja bem vindo")
})
app.get("/canal",(requisicao, resposta)=>{
    resposta.json({"canal":"cfb cursos"})
})

app.listen(porta || 3000, ()=>{
    console.log("servidor rodando no http://localhost:3000")
})