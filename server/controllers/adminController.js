'use strict';
var Demo = require('../models/demo');

// The admin controller.
var AdminController = {
  index: function(req, res) {
    res.status(200).json({ message: 'Welcome to the admin area ' + req.user.username + '!' });
  },
  getPendings: function(req, res) {
    Demo.all().then(AllDemos => {
      res.status(200).json(AllDemos);
    })
  }
};

module.exports = AdminController;