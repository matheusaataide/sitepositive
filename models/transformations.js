module.exports = (sequelize, DataType) => {
    const transformations = sequelize.define('transformations', {
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
        }
    }, {
        sequelize,
        tableName: 'transformations',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    transformations.associate = models => {
        const { users, courses, testemonials } = models;

        transformations.belongsTo(users, { as: 'createdBy' });
        transformations.belongsTo(users, { as: 'updatedBy' });
        transformations.hasMany(courses);
        transformations.hasMany(testemonials);
    };

    return transformations;
};