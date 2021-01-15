const httpStatus = require('http-status');
const security = require('../util/security');

const UserController = database => ({
    delete: async (req, res) => {
        const { users } = database;
        const flag = await users.destroy({ where: req.params });
        return res.status(httpStatus.OK).json({ success: flag });
    },
    get: async (req, res) => {
        const { users } = database;
        const user = await users.findByPk(req.params.id);
        return res.status(httpStatus.OK).json(user);
    },
    getAll: async (req, res) => {
            const { users } = database;
            return res.status(httpStatus.OK).json(await users.findAll());
        },
    save: async (req, res) => {
        const { users } = database;

        const newInstance = await users.create(req.body); 

        return res.status(httpStatus.CREATED).json(newInstance);
    },
    edit: async (req, res) => {
        const { users } = database;
        const user = await users.update(req.body, { where: req.params });
        return res.status(httpStatus.CREATED).json(user);
    },

    // Funcão responsável pela autenticação
    login: async (req, res) => {
        const { users } = database;

        const { username, password } = req.body;

        const user = await users.findOne({ where: { username: username }});
        if (user === null) 
            return res.status(httpStatus.BAD_REQUEST).json({ auth: false });

        return res.status(httpStatus.OK).json(security.login(user, password));   
    }
});


module.exports = UserController;