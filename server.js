const express = require('express');
const userDb = require('./users/userDb');

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

server.use(logger);

server.listen(5000, () => 
  console.log('Server running on http://localhost:5000')
)

module.exports = server;
