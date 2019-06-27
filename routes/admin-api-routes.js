var db = require("../models");

module.exports = function(app) {
  app.get("/api/students", function(req, res) {
    // 1. Add a join to include all of each Student's Grades
    db.Student.findAll({}).then(function(dbStudent) {
      include: [db.Grade]
      res.json(dbStudent);
    });
  });

  app.get("/api/students/:id", function(req, res) {
    // 2; Add a join to include all of the Student's Grades here
    db.Student.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Grade]
    }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

  app.post("/api/students", function(req, res) {
    db.Student.create(req.body).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

  app.delete("/api/students/:id", function(req, res) {
    db.Student.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

};