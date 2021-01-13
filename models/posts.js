module.exports = (sequelize, DataType) => {
    const posts = sequelize.define('posts', {
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
        }
    }, {
        sequelize,
        tableName: 'posts',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    posts.associate = models => {};

    return posts;
};