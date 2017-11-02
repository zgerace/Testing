var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(express.static('public'))
app.get('/', function(req, res){
    res.send('Testing World')
})


app.listen(8080, '172.31.87.197');