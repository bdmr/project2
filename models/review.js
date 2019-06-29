module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    student_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    
    comments: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Review.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Review.belongsTo(models.Admin, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};