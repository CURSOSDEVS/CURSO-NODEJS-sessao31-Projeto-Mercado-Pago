const express = require('express');
const mercadoPago = require('mercadopago');

//instancia do express
const app = express();

//setar a configuração do mercado pago
mercadoPago.configure({
    sendBox: true,
    access_token: "TEST-3968865630091953-021112-55b106e9d39971879c1930b459f86c35-82586186"
});

//criando as rotas da aplicação
//rota principal da aplicação
app.get('/',(req, res)=>{
    res.send("Olá mundo");
})



app.listen(3000, (req, res)=>{
    console.log("Servidor rodando");
})