
var path = require('path');
var express = require('express');




var app = express();
var place = "/dist"; // "/src", "/build"


app.use(require('connect-livereload')());

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/scripts', express.static(__dirname + place + '/scripts'));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + place + '/index.html'));
});


app.listen(3000, '0.0.0.0', function() {
    console.log('Express server listening on port 3000');
});