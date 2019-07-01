module.exports = function (sequelize, DataTypes){
    var Post = sequelize.define("Post", {
        student_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        grade: {
            type: DataTypes.STRING,
            allowNull: true
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
            len:[1]
        }
    });

    Post.associate = function(models){
        Post.belongsTo(models.Parent, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Post.associate = function(models){
        Post.belongsTo(models.Teacher, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Post;

};