const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log('Request method: ', req.method);
  console.log('Request URL: ', req.url);
  console.log('Timestamp: ', new Date().toISOString());
  next();
}

app.use(logger);

module.exports = server;
