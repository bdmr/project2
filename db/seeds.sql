
INSERT INTO Users (email, password, occupation) VALUES ("bob@gmail.com", "bob123123", "TEACHER");
INSERT INTO Teachers (teacher_name, UserId) VALUES ("Mr. Brehm", 1);
INSERT INTO Parents (parent_name) VALUES ("Carrie");
INSERT INTO Students (student_name, ParentId, TeacherId) VALUES ("Ruby", 1, 1);
INSERT INTO Posts (grade, comment, TeacherId, StudentId) VALUES ("5th", "Ruby was an excellent friend to Terry today", 1, 1);
INSERT INTO Users (email, password, occupation) VALUES ("carrie@gmail.com", "carrie123123", "PARENT");
UPDATE Parents SET UserId = 2 WHERE id = 1