/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  signup: function (req,res) {
    res.view({ hello: req.ip });
  },
  signin: function (req,res) {
    res.view({ hello: req.ip });
  },
  login: function (req,res) {
    res.view({ hello: req.ip });
  }
};

