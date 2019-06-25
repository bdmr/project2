require('dotenv').config();

var express = require('express');
var app = express();
var port = process.env.PORT || 9000;
var config = require('./config');

app.use(express.static(__dirname + '/public')); // you should change this to be wherever your html files are
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// require("./routes/api-routes.js")(app);
require("./public/routes/html-routes.js")(app);

app.listen(port);
console.log("App listening on PORT 9000");

