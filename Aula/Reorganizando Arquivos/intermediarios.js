//Middleware (Intermediário)
function logarRequisicao(req, res, next) {
  console.log(req.method, req.url);
  console.log("O corpo da mensagem é: ", req.body);
  next();
}

//Middleware (Intermediário) 2
function travaDeSenha(req, res, next) {
  console.log("Segundo intermediário:", req.query);
  if (req.method === "GET" || req.query.senha === "123456") {
    next();
  } else {
    res.status(401);
    res.json({ erro: "Senha Incorreta!" });
  }
}

module.exports = {
  logarRequisicao,
  travaDeSenha
};