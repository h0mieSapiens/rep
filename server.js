var http = require("http");
var express = require('express');
var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname)+'/views');

var ejs = require('ejs');
app.set('views',__dirname + '/views');
app.engine('html',ejs.renderFile);
app.set('view engine',ejs);

app.get('/', (req, res) => {
    res.send("index.html");

});

app.listen(8080, () => {
    console.log("el server ya sirve");
});