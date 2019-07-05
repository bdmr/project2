var path = require("path");
var db = require("../models")

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
        // Check the query string
        // In order for parent to be recognized, they must already be in the system 
        // When teacher adds student, the parent will be entered in the db because they are associated with the student
        // Therefore, teacher must have added their student before parent can sign up
        if (req.query.occupation === "TEACHER") {
            res.render('signup', {
                layout: 'login',
                title: getPageTitle('Sign Up'),
                isTeacher: true,
            });
        } else {
            db.Parent.findAll().then(parents => {
                console.log(parents);
                res.render('signup', {
                    layout: 'login',
                    title: getPageTitle('Sign Up'),
                    isTeacher: false,
                    parents: parents
                });
            });
        }
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