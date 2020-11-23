module.exports = app => {
	const Tarefa = app.models.categorias;
	app.get("/categorias", (req, res) => {
			Tarefa.findAll(  
				 {},(retorno) =>
							{
								res.json({Categorias: retorno})
							}
			);
	}
	);	
};