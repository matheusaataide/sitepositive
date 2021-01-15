module.exports = (sequelize, DataType) => {
    const users = sequelize.define('users', {
        'id': {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'username': {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },
        'name': {
            type: DataType.STRING,
            allowNull: false
        },
        'email': {
            type: DataType.STRING,
            unique: true,
            allowNull: false
        },
        'password': {
            type: DataType.STRING,
            defaultValue: '1234'
        }, 
        'profilePic': DataType.STRING
    }, {
        sequelize,
        tableName: 'users',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    users.associate = models => {};

    return users;
};