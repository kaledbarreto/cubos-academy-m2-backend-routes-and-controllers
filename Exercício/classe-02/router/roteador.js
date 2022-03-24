const express = require('express');
const alunos = require('../controller/alunos');

const roteador = express();

roteador.get("/alunos", alunos.consultarTodosOsAlunos);
roteador.get("/alunos/:idConsultado", alunos.consultarUmAluno);
roteador.post("/alunos", alunos.criarAluno);
roteador.patch("/alunos/:idConsultado", alunos.editarAluno);
roteador.delete("/alunos/:idConsultado", alunos.excluirAluno);

module.exports = roteador;