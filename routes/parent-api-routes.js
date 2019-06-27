// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the grades
  app.get("/api/students", function(req, res) {
    var query = {};
    if (req.query.student_id) {
      query.StudentId = req.query.student_id;
    }
    // 1. Add a join here to include all of the Studentss to these grades
    db.Grade.findAll({
      where: query,
      include: [db.Student],
    }).then(function(dbGrade) {
      res.json(dbStudent);
    });
  });

  // Get route for retrieving a single student's grade
  app.get("/api/students/:id", function(req, res) {
    // 2. Add a join here to include the Author who wrote the Post - delete
    db.Grade.findOne({
      where: {
        id: req.params.id,
        include: [db.Student]
      }
    }).then(function(dbGrade) {
      console.log(dbGrade);
      res.json(dbGrade);
    });
  });

  // POST route for saving a new student grade
  app.post("/api/students", function(req, res) {
    db.Grade.create(req.body).then(function(dbGrade) {
      res.json(dbGrade);
    });
  });

  // DELETE route for deleting student grades
  app.delete("/api/students/:id", function(req, res) {
    db.Grade.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGrade) {
      res.json(dbGrade);
    });
  });

  // PUT route for updating gradess
  app.put("/api/students", function(req, res) {
    db.Grade.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbGrade) {
      res.json(dbGrade);
    });
  });
};