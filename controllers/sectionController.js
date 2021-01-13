const httpStatus = require('http-status');

const SectionController = database => ({
    delete: async (req, res) => {
        const { sections } = database;
        const flag = await sections.destroy({ where: req.params });
        return res.status(httpStatus.OK).json({ success: flag });
    },
    get: async (req, res) => {
        const { sections } = database;
        const section = await sections.findByPk(req.params.id);
        return res.status(httpStatus.OK).json(section);
    },
    getAll: async (req, res) => {
            const { sections } = database;
            return res.status(httpStatus.OK).json(await sections.findAll());
        },
    save: async (req, res) => {
        const { sections } = database;

        const newInstance = await sections.create(req.body); 

        return res.status(httpStatus.CREATED).json(newInstance);
    },
    edit: async (req, res) => {
        const { sections } = database;
        const post = await sections.update(req.body, { where: req.params });
        return res.status(httpStatus.CREATED).json(post);
    }
});


module.exports = SectionController;