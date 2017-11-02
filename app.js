var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(express.static('public'))

app.listen(8080, function(){
        console.log('Server started on port 8080');
});