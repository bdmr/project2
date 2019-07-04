module.exports = function(sequelize, DataTypes) {
    var Parent = sequelize.define("Parent", {
        parent_name: DataTypes.STRING // not needed because that info is in User table
            // , userKey: associate user with parent
    });

    Parent.associate = function(models) {

        Parent.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };
    return Parent;



}