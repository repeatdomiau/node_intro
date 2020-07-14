const express = require('express');
const router = require('./router');

const app = express();

app.use(express.static('public'));

app.use(router);

app.listen(8080, () => console.log('listening on http://localhost:8080...'));