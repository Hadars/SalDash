'use strict';
var models = require('../models');

// The admin controller.
var AdminController = {
  index: function(req, res) {
    res.status(200).json({ message: 'Welcome to the admin area ' + req.user.username + '!' });
  },
  getPendings: function(req, res) {
    models.demo.all().then(AllDemos => {
      res.status(200).json(AllDemos);
    })
  }
};

module.exports = AdminController;