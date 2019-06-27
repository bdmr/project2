module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
      // Giving the Student model a name of type STRING
      name: DataTypes.STRING
    });
  
    Student.associate = function(models) {
      // Associating Student with Gradess
      // When an STudent is deleted, also delete any associated Grades
      Student.hasMany(models.Grade, {
        onDelete: "cascade"
      });
    };
  
    return Student;
  };