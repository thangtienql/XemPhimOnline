var express = require('express');
var router = express.Router();
const {UpdateCategoryApi, UpdateFilmApi} =require('../src/RoutesHandle/ApiRouteHandle');

router.get('/', function (req, res, next){

});

router.get('/update-category', UpdateCategoryApi);
router.get('/update-film', UpdateFilmApi);

module.exports = router;
