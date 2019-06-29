CREATE TABLE admin
(
	id int NOT NULL AUTO_INCREMENT,
	student_name varchar(255) NOT NULL,
    grade_level varchar(255) NOT NULL, 
    student_class varchar(255) NOT NULL,
    letter_grade varchar(255) NOT NULL,
    comments varchar(255) NOT NULL,
    parent_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

-- INSERT INTO admin (id, last_name, first_name, grade_level, student_class) VALUES ('Billy Madison', FALSE);
-- INSERT INTO admin (id, last_name, first_name, grade_level, student_class) VALUES ('Jenny Smith', FALSE);
-- INSERT INTO admin (id, last_name, first_name, grade_level, student_class) VALUES ('Sam Stevens', FALSE);
-- INSERT INTO admin (id, last_name, first_name, grade_level, student_class) VALUES ('Bobby Jones', FALSE);
-- INSERT INTO admin (id, last_name, first_name, grade_level, student_class) VALUES ('Kim Thomas', FALSE);