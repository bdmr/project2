module.exports = function(sequelize, DataTypes) {
    var Grade = sequelize.define("Grade", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Grade.associate = function(models) {
      // We're saying that a Grade should belong to an Student
      // A Grade can't be created without a Student due to the foreign key constraint
      Grade.belongsTo(models.Student, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Grade;
  };
  