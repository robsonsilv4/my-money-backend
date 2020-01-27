const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const queryParser = require('express-query-int');
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(queryParser());
server.use(allowCors);

server.listen(port, function() {
  console.log(`O backend está rodando na porta ${port}.`);
});

module.exports = server;
