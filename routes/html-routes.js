var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app){
    //home page
    //app.get("/", function(req, res){
        //res.sendFile(path.join(__dirname, "../public/blog.html"));

    //});
    app.get("/", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
          res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
      });
    
      app.get("/login", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
          res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
      });
    
      // Here we've add our isAuthenticated middleware to this route.
      // If a user who is not logged in tries to access this route they will be redirected to the signup page
      app.get("/members", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/calender.html"));
      });
    

    //page to add a parent
    app.get("/addParent", function(req, res){
        res.sendFile(path.join(__dirname, "../public/addParent.html"));
    })

    //page to add a teacher
    app.get("/addTeacher", function(req, res){
        res.sendFile(path.join(__dirname, "../public/addTeacher.html"));
    })

    //page to add a student comment
    app.get("/cms", function(req, res){
        res.sendFile(path.join(__dirname, "../public/cms.html"));
    })
//another path to the blog page
    app.get("/blog", function(req, res){
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    })
}