module.exports = (sequelize, DataType) => {
    const sections = sequelize.define('sections', {
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
        'type': {
            type: DataType.STRING,
            defaultValue: ''
        }
    }, {
        sequelize,
        tableName: 'sections',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    sections.associate = models => {
        const { users } = models;

        sections.belongsTo(users, { as: 'updatedBy' });
    };

    return sections;
};