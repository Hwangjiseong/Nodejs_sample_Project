var express = require('express');
var app = express();

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');

app.use('/',indexRouter);
app.use('/login',loginRouter);

const PORT = 3000;

app.listen(PORT,function () {
    console.log(`Connected to http://localhost:${PORT}`);
})