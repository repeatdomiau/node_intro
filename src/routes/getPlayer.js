const players = require('../data');

module.exports = (req, res) => {
  res.setHeader('content-type', 'text/json');
  const id = parseInt(req.params.id);
  if (id && !isNaN(id)) {
    const index = players.findIndex(x => x.id === id);
    if (index > -1) {
      res.statusCode = 200;
      return res.end(JSON.stringify(players[index]));
    }
    else {
      res.statusCode = 404; //NOT FOUND
      return res.end('Não foi encontrado um jogador com id ' + id);
    }
  }
  else {
    res.statusCode = 400; //BAD REQUEST
    return res.end('É necessário prover o ID numérico nesse entrypoint');
  }
};