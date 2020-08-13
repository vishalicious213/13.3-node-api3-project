const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log('Request method: ');
  console.log('Request URL: ');
  console.log('Timestamp: ');
  next();
}

app.use(logger);

module.exports = server;
