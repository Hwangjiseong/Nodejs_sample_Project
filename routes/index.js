var express = require('express');
var router = express();

router.get('/index',function(req,res){
    res.send('Hello World!');
});

router.get('/join',function(req,res){
    res.send('Hello join!');
});

module.exports = router;