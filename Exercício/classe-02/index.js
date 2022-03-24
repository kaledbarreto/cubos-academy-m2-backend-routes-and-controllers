const express = require('express');
const roteador = require('./router/roteador');
const { travaDeSenha } = require('./middleware/intermediarios');

const app = express();

app.use(express.json());
app.use(travaDeSenha);
app.use(roteador);

app.listen(8000);