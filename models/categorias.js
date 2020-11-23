module.exports = app => {
	return {
			findAll: (params,callback) => {
				return callback(
					[
						{idCategoria:1, nome:"Mochila escolar"},
            {idCategoria:2, nome:"Caderno escolar"},
            {idCategoria:3, nome:"Caneta"},
					]
				)				
			}
	}
};