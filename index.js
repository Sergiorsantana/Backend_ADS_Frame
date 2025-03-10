//console.log('Hello World');
//Cria uma aplicação utilizando o express
const express = require('express');
const app = express();
//Cria uma rota ou endpoint
//Quando o usuário acessar a rota /, a função será executada
//A função recebe dois parâmetros: req e res
app.get('/', function(req, res) {
    res.send('Hello World!');
}); 

//Endpoint para a rota /sobre
app.get('/oi', function(req, res) {
    res.send('Olá, Mundo!');
});

//Aplicação escuta na porta 3000
app.listen(3000);
console.log('Servidor rodando na porta 3000');