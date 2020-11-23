module.exports = app => {
	return {
			findAll: (params,callback) => {
				return callback(
					[
					{
            idEndereco:1,
            cep:"00000000",
            cidade:"eee",
            lagrouro:"eeee",
            complemento:"eeee",
            bairro:"eeee",
            rua:"eeee",
            uf:"ee",
            tipoEndereco:"eeeee"
          }
					]
				)				
			}
	}
};