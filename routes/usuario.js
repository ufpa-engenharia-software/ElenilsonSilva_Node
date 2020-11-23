const bodyParser = require('body-parser')

module.exports = app => {
  const Tarefas = app.models.usuario;

  app.get("/usuario", (req, res) => {
    Tarefas.findAll({},(retorno) =>
      {res.json({Usuario: retorno})});

  });

  var jsonParser = bodyParser.json()
  app.post("/", jsonParser, function(req, res){
      var idUsuario = req.body.idUsuario
      var nome = req.body.nome
      var data_nascimento = req.body.data_nascimento
      var email = req.body.email
      var login = req.body.login
      var senha = req.body.senha

    res.json(
      {
        idRecebido: idUsuario,
        nomeRecebido: nome,
        dataRecebida: data_nascimento,
        emailRecebido: email,
        loginRecebido: login,
        senhaRecebido: senha,
      }
    )
  });
};
