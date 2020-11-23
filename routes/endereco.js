const bodyParser = require('body-parser')

module.exports = app => {
  const Tarefas = app.models.endereco;

  app.get("/endereco", (req, res) => {
    Tarefas.findAll({},(retorno) =>
      {res.json({Endereco: retorno})});

  });

  var jsonParser = bodyParser.json()
  app.post("/endereco", jsonParser, function(req, res){
    
    var cep = req.body.cep
    var cidade = req.body.cidade
    var lagrouro = req.body.lagrouro
    var complemento = req.body.complemento
    var bairro = req.body.bairro
    var rua = req.body.rua
    var uf = req.body.uf
    var tipoEndereco = req.body.tipoEndereco;

    res.json(
      {
        cepRecebido: cep,
        cidadeRecebido: cidade,
        lagrouroRecebido: lagrouro,
        complementoRecebido: complemento,
        bairroRecebido: bairro,
        ruaRecebido: rua,
        ufRecebido: uf,
        tipoEnderecoRecebido: tipoEndereco, 

      }
    )
  });
};
