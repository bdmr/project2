var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

function getPageTitle(page) {
    return 'RulEr | ' + page;
}

module.exports = function(app) {
    app.get("/", function(req, res) {
        // If the user already has an account send them to the dashboard page
        if (req.user) {
            res.redirect("/dashboard");
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
            res.redirect("/dashboard");
        }
        res.render('login', {
            layout: 'login',
            title: getPageTitle('Login')
        })
    });

    app.get("/calendar", isAuthenticated, function(req, res) {
        res.render('calendar', {
            title: getPageTitle('Calendar')
        })
    });

    app.get("/addStudent", isAuthenticated, function(req, res) {
        res.render('addStudent', {
            title: getPageTitle('Add New Student')
        })
    })

    app.post("/addStudent", isAuthenticated, function(req, res) {
        console.log(req.body)
        res.redirect('/dashboard')
    })

    app.get("/dashboard", isAuthenticated, function(req, res) {
        // TODO: add logic to distinguish between parents and teachers
        console.log("DASHBOARD")
        console.log(req.user);
        const student_name = "Fred";
        const student_id = 1;
        res.render('dashboard', {
            title: getPageTitle('Dashboard'),
            isTeacher: true,
            name: req.user.email,
            students: [{
                student_name: student_name,
                student_id: student_id
            }]
        })
    })

    //page to add a student comment
    app.get("/cms", isAuthenticated, function(req, res) {
        /** what data do you need?
         * The Teacher/User 
         * All Parents (from students)
         * All Students
         * =======================
         * Teacher name (current user as long as they're a teacher, they can see this page)
         * 
         * Select (students)
         * 
         * Comments
         * =======================
         */

        res.render('cms', {
            title: getPageTitle('Create Posts')
        })
    })
}