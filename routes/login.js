var express = require('express');
var router = express();

router.get('/',function (req,res) {
    res.send('this page is login page');
 });

 module.exports = router;