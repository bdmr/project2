module.exports = function(sequelize, DataTypes){
    var Parent = sequelize.define("Parent", {
        parent_name: DataTypes.STRING
    });

    Parent.associate = function(models){

        Parent.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };
    return Parent;



}