var express = require('express');
var router = express.Router();
const {UpdateCategoryApi} =require('../src/RoutesHandle/ApiRouteHandle');

router.get('/', function (req, res, next){

});

router.get('/update-category', UpdateCategoryApi);

module.exports = router;
