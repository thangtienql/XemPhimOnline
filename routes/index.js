var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/movies', function(req, res, next) {
  res.render('movie', { title: 'Express' });
});

/* GET home page. */
router.get('/play', function(req, res, next) {
  res.render('player', { title: 'Express' });
});

module.exports = router;
