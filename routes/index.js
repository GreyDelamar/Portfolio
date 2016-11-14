var express = require('express');
var router = express.Router();
var query = require('../database/query');
var knex = require('../database/knex');
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Grey Delamar' });
});

router.post('/job', function(req, res, next){
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var company = req.body.company;
  var email = req.body.email;
  var message = req.body.message;

  query.addcontact(firstname, lastname, company, email, message)
    .then(function(data) {
         res.redirect('/')
     })
    .catch(function(err){
      return next(err);
    })
})

module.exports = router;
