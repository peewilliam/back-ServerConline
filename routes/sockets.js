

module.exports = function(io) {
  io.on("connection", async (socket) => {

    console.log('nova conexão')

    socket.on('att_tabela', async function(msg) {
      console.log('tabela atualizado', msg)
      await io.emit('att_tabela', msg);
    });

   
    
    socket.on('parametros', async function(param) {
      console.log('novo parametro', param)
      console.log(param.adress, param.param)
      await io.emit(param.adress, param.param);
      
    });
    

  });
}

