'use strict';

var JWTStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var models = require('../models');
var config = require('../config/config');

// Hooks the JWT Strategy.
function hookJWTStrategy(passport) {
  var options = {};

  options.secretOrKey = config.keys.secret;
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  options.ignoreExpiration = false;

  passport.use(new JWTStrategy(options, function(JWTPayload, callback) {
    models.user.findOne({ where: { username: JWTPayload.username } })
      .then(function(user) {
        if(!user) {
          callback(null, false);
          return;
        }

        callback(null, user);
      });
  }));
}

module.exports = hookJWTStrategy;