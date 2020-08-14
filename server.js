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

function validateUserId(req, res, next) {
  userDb.getById(req.params.id)
    .then(user => {
      if(!user) {
        res.status(400).json({ message: 'Invalid user ID' });
      } else {
        req.user = user;
        next();
      }
    });
}

app.use(logger);

module.exports = server;
