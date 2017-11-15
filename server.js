//dependises
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();


//define json parser
var jsonPaser = bodyParser.json();

//nodemailer informaiton
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'testing@gmail.com',
        pass: 'testing'
    }
});

var mailOptions = {
    fron: 'testing@gmail.com',
    to: 'zgerace@gemsupply.net',
    subject: 'Testing out our mailing service',
    text: 'user informaiton: ' + jsonPaser.object.user.name + ' .'
};

//routers
app.post('/api', jsonPaser, function(req, res){
    //returning the status code
	if(!req.body) return res.sendStatus(400);
    
    //sending the email with the informaiton
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        } else {
            console.log('Email Was sent');
        }
    })
    
})


//midleware



//callback function
//app.listen(8080, '172.31.87.197');
app.listen(3000);
console.log('working')