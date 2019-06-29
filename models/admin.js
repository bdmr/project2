module.exports = function(sequelize, DataTypes) {
  var Admin = sequelize.define("Admin", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Admin.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  return Admin;
};

  