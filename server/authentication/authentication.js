var passport = require('passport');
const expressValidator = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var sampleUsers = require('./auth-sampleData.js');

var findByUser = function(username) {
  for (var i = 0; i < sampleUsers.users.length; i++) {
    if (sampleUsers.users[i]['username'] === username) {
      return sampleUsers.users[i];
    }
  }

  return [];
}

var verifyLogin = function(loginInfo, callback) {
  var user = findByUser(loginInfo.username);
  if (user.length === 0) {
    callback(2, null);
  } else {
    if (user.password === loginInfo.password) {
      callback(null, user.id);
    } else {
      console.log('wrong password');
    }
  }
};

var validateEntry = (req, callback) => {
  req.checkBody('username', 'Username field cannot be empty.').notEmpty();
  req.checkBody('password', 'Password field cannot be empty.').notEmpty();
  req.checkBody('password', 'Password must be between 4-16 characters long.').len(4, 16);
  req.checkBody('passwordMatch', 'Passwords do not match, please try again.').equals(req.body.password);

  req.getValidationResult().then((result) => {
    if (!result.isEmpty()) {
      var errors = result.array().map((error) => {
        return error.msg;
      });
      callback(errors, null);
    } else {
      callback(null, 'validated');
    }
  })
}

var hashPassword = (password, callback) => {
  bcrypt.hash(password, saltRounds, (error, hash) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, hash);
    }
  })
};

var authenticator = () => {
  return (req, res, next) => {
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

    if (req.isAuthenticated()) {
      return next();
    }

    
  }
}

module.exports = {
  verifyLogin: verifyLogin,
  validateEntry: validateEntry,
  hashPassword: hashPassword
}