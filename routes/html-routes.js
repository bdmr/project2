var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

function getPageTitle(page) {
    return 'RulEr | ' + page;
}

module.exports = function(app) {
    //home page
    //app.get("/", function(req, res){
    //res.sendFile(path.join(__dirname, "../public/blog.html"));

    //});
    app.get("/", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        } else {
            res.redirect('/login');
        }
    });

    app.get("/signup", function(req, res) {
        res.render('signup', {
            layout: 'login',
            title: getPageTitle('Sign Up')
        })
    });

    app.get("/login", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.render('login', {
            layout: 'login',
            title: getPageTitle('Login')
        })
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members", isAuthenticated, function(req, res) {
        res.render('calendar', {
            title: getPageTitle('Calendar')
        })
    });

    app.get("/calendar", isAuthenticated, function(req, res) {
        res.render('calendar', {
            title: getPageTitle('Calendar')
        })
    });

    //page to add a parent
    app.get("/addParent", function(req, res) {
        res.render('addParent', {
            title: getPageTitle('Add Parent')
        })
    })

    //page to add a teacher
    app.get("/addTeacher", function(req, res) {
        res.render('addTeacher', {
            title: getPageTitle('addTeacher')
        })
    })

    //page to add a student comment
    app.get("/cms", function(req, res) {
        res.render('cms', {
            title: getPageTitle('Create Posts')
        })
    })

}