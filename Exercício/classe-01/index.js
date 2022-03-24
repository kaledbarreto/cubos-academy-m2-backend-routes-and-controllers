//Ta classe-02 mas esse é o exercício 01, fui muito além nos comandos de git, ai ficou assim... Mas bola pra frente :)

const express = require('express');
const roteador = require('./router/roteador');

const app = express();

app.use(express.json());
app.use(roteador);

app.listen(8000);