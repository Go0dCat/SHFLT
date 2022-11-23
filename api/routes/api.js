const express = require('express');
const router = express.Router();
//require models here...
const Test = require('../models/test');


/* routing for model ACTIVITY  */
router.get('/test', function(req, res, next){
  console.log('getting stuff');
  //res.send({type:'GET'});

  Test.find().then(function(tests) {
    res.send(tests);
  });
});


module.exports = router;