const { criarInstrutor } = require('../../../../Live Help/Reorganizando Arquivos/controladores/instrutores');
const listaDeAlunos = require('../data/alunos');
const areasDeAtuacaoValidas = require('../data/cursos');

function consultarTodosOsAlunos(req, res) {
  res.status(200);
  res.json(listaDeAlunos);
}

function consultarUmAluno(req, res) {
  if (req.params.idConsultado < 0) {
    res.status(400);
    res.json({ error: `O ID ${req.params.idConsultado} não é um número válido` });
    return;
  }

  const aluno = listaDeAlunos.find(
    (aluno) => aluno.id === Number(req.params.idConsultado)
  );

  if (!aluno) {
    res.status(404);
    res.json({ error: `Aluno ${req.params.idConsultado} não foi encontrado.` });
    return;
  }
  res.status(200);
  res.json(aluno);
}

function validarAluno(aluno) {
  if (!aluno.nome) {
    return "O campo 'nome' é obrigatório.";
  }

  if (!aluno.sobrenome) {
    return "O campo 'sobrenome' é obrigatório.";
  }

  if (!aluno.idade) {
    return "O campo 'idade' é obrigatório.";
  }

  if (!aluno.curso) {
    return "O campo 'curso' é obrigatório.";
  }

  if (typeof aluno.nome !== "string") {
    return "O campo 'nome' deve ser preenchido com um texto.";
  }

  if (typeof aluno.sobrenome !== "string") {
    return "O campo 'sobrenome' deve ser preenchido com um texto.";
  }

  if (typeof aluno.idade !== "number") {
    return "O campo 'idade' deve ser preenchido com um número.";
  }

  if (typeof aluno.curso !== "string") {
    return "O campo 'curso' deve ser preenchido com um texto.";
  }

  if ((aluno.nome).indexOf(' ') >= 0) {
    return "O campo 'curso' deve ser preenchido com um texto válido.";
  }

  if (aluno.idade < 18) {
    return "O aluno deve ser maior de idade.";
  }

  if (!areasDeAtuacaoValidas.includes(aluno.curso)) {
    return "A área de atuação informada é inválida.";
  }
}

let proximoId = 1;

function criarAluno(req, res) {
  const erro = validarAluno(req.body);

  if (erro) {
    res.status(400);
    res.json({ erro });
    return;
  }

  const novoAluno = {
    id: proximoId,
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    idade: req.body.idade,
    curso: req.body.curso
  }

  listaDeAlunos.push(novoAluno);
  proximoId++;

  res.status(201);
  res.json({ mensagem: "201 (Created)" });
}

function editarAluno(req, res) {
  if (req.params.idConsultado < 0) {
    res.status(400);
    res.json({ error: `O ID ${req.params.idConsultado} não é um número válido` });
    return;
  }

  const aluno = listaDeAlunos.find(
    aluno => aluno.id === Number(req.params.idConsultado)
  );

  if (!aluno) {
    res.status(404);
    res.json({ error: `Aluno ${req.params.idConsultado} não foi encontrado.` });
    return;
  }

  const erro = validarAluno({
    nome: req.body.nome ?? aluno.nome,
    sobrenome: req.body.sobrenome ?? aluno.sobrenome,
    idade: req.body.idade ?? aluno.idade,
    curso: req.body.curso ?? aluno.curso
  });

  if (erro) {
    res.status(400);
    res.json({ erro });
    return;
  }

  if (req.body.nome !== undefined) {
    aluno.nome = req.body.nome;
  }

  if (req.body.sobrenome !== undefined) {
    aluno.sobrenome = req.body.sobrenome;
  }

  if (req.body.idade !== undefined) {
    aluno.idade = req.body.idade;
  }

  if (req.body.curso !== undefined) {
    aluno.curso = req.body.curso;
  }

  res.json(aluno);
}


function excluirAluno(req, res) {
  if (req.params.idConsultado < 0) {
    res.status(400);
    res.json({ error: `O ID ${req.params.idConsultado} não é um número válido` });
    return;
  }

  const aluno = listaDeAlunos.find(
    (aluno) => aluno.id === Number(req.params.idConsultado)
  );

  if (!aluno) {
    res.status(404);
    res.json({ erro: `O aluno ${req.params.idConsultado} não existe.` });
    return;
  }

  const indice = listaDeAlunos.indexOf(aluno);

  listaDeAlunos.splice(indice, 1);

  res.status(200);
  res.json(aluno);
}


module.exports = {
  consultarTodosOsAlunos,
  consultarUmAluno,
  criarAluno,
  editarAluno,
  excluirAluno
}

