const express = require('express');
const userDb = require('./userDb');

const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

// GET USERS
router.get('/', (req, res) => {
  userDb.get(req.body).then(users => {
    res.status(200).json(users);
  })
});

// GET USER BY ID
router.get('/:id', validateUserId, (req, res) => {
  userDb
    .getById(Number(req.params.id))
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      console.log('Error getting user: ', err)
      res.status(500).json({ message: 'Could not retrieve user'})
    })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

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

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
