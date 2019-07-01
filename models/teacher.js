module.exports = function(sequelize, DataTypes){
    var Teacher = sequelize.define("Teacher", {
        teacher_name: DataTypes.STRING
    });

    Teacher.associate = function(models){
        Teacher.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };
    return Teacher;


};