const express = require('express');
const consign = require('consign');

const app = express();


consign().include("models"). // todos os arquivos na pasta models (representando modelo de dados)
then("libs/middlewares"). // arquivo representando middlewares
then("routes"). // todos os arquivos na pasta routes com os serviços REST
then("libs/boot"). // arquivo representando a inicialização inicial da aplicacao
into(app);

app.listen(3000, () => {
  console.log('server started');
});