var path = require("path");


module.exports = function(app){
    //home page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/blog.html"));

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