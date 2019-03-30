const { Router } = require('express');

const User = require('../models/user');

const router = Router();
module.exports = function(passport) {
  router.post('/register', function(req, res) {
    const { name, email, password } = req.body;
    var user = new User({
      name,
      email,
      password
    });
    user.save(function(err) {
      if (err) return console.log(err);
      res.send('user created successfully');
    });
  });

  router.post(
    '/login',
    passport.authenticate('local', {
      failureRedirect: '/',
      successRedirect: '/list'
    }),
    function(req, res) {
      const { email, password } = req.body;
      User.find({ email, password }, function(err, user) {
        if (err) return console.log(err);
        res.send(user);
      });
    }
  );

  return router;
};
