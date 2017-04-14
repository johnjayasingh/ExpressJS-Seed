var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Connect to the Mangoose database
mongoose.connect("mongodb://127.0.0.1:27017/bookstore");
var db = mongoose.connection;

app.get('/', function (req, res) {
    res.send('Hello Word');
})

app.listen(3000);
console.log('Running on Port 3000..');
