const express = require('express');
const imoveis = require('../controller/imoveis');

const roteador = express();

roteador.get("/imoveis", imoveis.consultarTodosOsImoveis);
roteador.get("/imoveis/:idConsultado", imoveis.consultarUmImovel);

module.exports = roteador;