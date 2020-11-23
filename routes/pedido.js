module.exports = app => {
  const Tarefa = app.models.pedido;
  app.get("/pedido", (req, res) => {
    Tarefa.findAll(
      {},(retorno) => 
      {
        res.json({Pedidos: retorno});
      }
    )
  });
};