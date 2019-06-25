const path = require("path")

module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../../index.html"));
      });

    app.get("/adminAddStudent", function(req, res) {
      res.sendFile(path.join(__dirname, "../adminAddStudent.html"));
    });
  
    app.get("/adminReviewStudent", function(req, res) {
      res.sendFile(path.join(__dirname, "../adminReviewStudent.html"));
    });
}