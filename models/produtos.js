module.exports = app => {
	return {
			findAll: (params,callback) => {
				return callback(
					[
						{id:1, nome:"Mochila Marvel"},
						{id:2, nome:"Mochila Iron Man"},
            {id:3, nome:"Caderno Capitão America"},
            {id:4, nome:"Caderno Homem Aranha"},
            {id:5, nome:"Caneta Azul"},
            {id:6, nome:"Caneta Preta"}
					]
				)				
			}
	}
};