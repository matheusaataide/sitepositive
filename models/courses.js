module.exports = (sequelize, DataType) => {
    const courses = sequelize.define('courses', {
        'id': {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'title': {
            type: DataType.STRING,
            allowNull: false
        },
        'content': {
            type: DataType.STRING,
            allowNull: false
        },
        'status': {
            type: DataType.STRING,
            defaultValue: true
        },
        'img': {
            type: DataType.STRING,
            defaultValue: ''
        },
        'date': {
            type: DataType.STRING,
            defaultValue: ''
        }
    }, {
        sequelize,
        tableName: 'courses',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    courses.associate = models => {};

    return courses;
};