var express = require('express');
var router = express.Router();
const {HomeRouteHandle}=require('../src/RoutesHandle/HomeRouteHandle')
const {GetMoviesByCategoryRoute}=require('../src/RoutesHandle/MoviesRouteHandle')
const {SearchRouteHandleRoute}=require('../src/RoutesHandle/SearchRouteHandle')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', HomeRouteHandle);

/* GET home page. */
router.get('/movies', function(req, res, next) {
  res.render('movie', { title: 'Express' });
});

/* GET home page. */
router.get('/list-movies', GetMoviesByCategoryRoute);

/* GET home page. */
router.get('/search', SearchRouteHandleRoute);

/* GET home page. */
router.get('/play', function(req, res, next) {
  res.render('player', { title: 'Express' });
});

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.merge('fake-news', {
    // external url to fetch
    sourceUrl: 'http://genk.vn/',
    // css selector to inject our content into
    // sourcePlaceholder: 'div[data-entityid="container-top-stories#1"]',
    // pass a function here to intercept the source html prior to merging
    transform: null
  });
});

module.exports = router;
