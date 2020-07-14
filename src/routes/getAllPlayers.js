const players = require('../data');

module.exports = (req, res) => {
  res.setHeader('content-type', 'text/json');
  res.end(JSON.stringify(players));
};