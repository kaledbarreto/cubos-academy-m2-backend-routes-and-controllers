const listaDeImoveis = require('../data/imoveis');

function consultarTodosOsImoveis(req, res) {
  res.json(listaDeImoveis);
};

function consultarUmImovel(req, res) {
  const imovel = listaDeImoveis.find(
    (imovel) => imovel.id === Number(req.params.idConsultado)
  );

  if (!imovel) {
    res.status(404);
    res.json({ error: `Imóvel ${req.params.idConsultado} não existe.` });
    return;
  }

  res.json(imovel);
}

module.exports = {
  consultarTodosOsImoveis,
  consultarUmImovel
}