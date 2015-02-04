var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
      {
          title: 'ROSE',
          shorttext: 'Test short text',
          longtext: 'Test long text'
      });
});

module.exports = router;
