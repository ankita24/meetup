const localStrategy = require('passport-local').Strategy;
const User = require('./models/user');
module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(user, done) {
    done(null, user);
    // User.findById(id, function(err, user) {
    //   if (err) return done(err);
    //   done(null, user);
    // });
  });
  passport.use(
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      function(email, password, done) {
        User.find({ email, password }, function(err, user) {
          if (err) return done(err);
          if (!user) done(null);
          else done(null, user);
        });
      }
    )
  );
};
