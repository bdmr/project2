// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================

require('dotenv').config();
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 9000;
//var config = require('./config');

// Requiring our models for syncing
//var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/parent-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);
require("./routes/teacher-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================

  app.listen(port);
  console.log("App listening on PORT 9000");