module.exports = apps =>{
  return{
    findAll: (params, callback) => {
      return callback(
        [
          {
            idUsuario: 1,
            idEndereco: 2,
            produtos: 
            [
              {
              id: 1,
              preco: 50,
              quantidade: 1
              },
              {
              id: 2,
              preco: 100,
              quantidade: 2
              }
            ],

            frete: 500,
            total: 650,
            }
        ]
      )
    }
  }
}