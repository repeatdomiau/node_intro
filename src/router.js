const express = require('express');
const router = express.Router();

const getAllPlayers = require('./routes/getAllPlayers');
const getPlayer = require('./routes/getPlayer');

router.get('/api/players/:id', getPlayer);

router.get('/api/players', getAllPlayers);

router.get('/api/livecheck', (req, res) => {
  res.end('OK');
});

module.exports = router;