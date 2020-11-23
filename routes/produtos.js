module.exports = app => {
	const Tarefa = app.models.produtos;
	app.get("/produtos", (req, res) => {
			Tarefa.findAll(  
				 {},(retorno) =>
							{
								res.json({Produtos: retorno})
							}
			);
	}
	);	
};