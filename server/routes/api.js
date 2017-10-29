'use strict';
var router = require('express').Router();
var config = require('../config/config');
var AuthController = require('../controllers/authController');
var allowOnly = require('../services/routesHelper').allowOnly;
var UserController = require('../controllers/userController');
var AdminController = require('../controllers/adminController');

var APIRoutes = function(passport) {

  router.post('/signup',
    AuthController.signUp
  );

  router.post('/authenticate',
    AuthController.authenticateUser
  );

  router.get('/profile',
    passport.authenticate('jwt', { session: false }), // passport.authenticate() - verify user's token
    allowOnly(config.accessLevels.user, UserController.index)
  );

  router.get('/getusers',
    passport.authenticate('jwt', { session: false }),
    allowOnly(config.accessLevels.user, UserController.getUsers)
  );

  router.get('/pendings',
    passport.authenticate('jwt', { session: false }),
    allowOnly(config.accessLevels.user, AdminController.getPendings)
  );

  router.get('/admin',
    passport.authenticate('jwt', { session: false }),
    allowOnly(config.accessLevels.admin, AdminController.index)
  );


  return router;
};

module.exports = APIRoutes;