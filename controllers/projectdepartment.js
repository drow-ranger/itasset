const Projectdepartment = require('../models').Projectdepartment;
const Department = require('../models').Department;

module.exports = {
    list(req, res) {
        return Projectdepartment
            .findAll({
                include: [],
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((projectdepartments) => res.status(200).send(projectdepartments))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        return Projectdepartment
            .findByPk(req.params.id, {
                include: [],
            })
            .then((projectdepartment) => {
                if (!projectdepartment) {
                    return res.status(404).send({
                        message: 'Projectdepartment Not Found',
                    });
                }
                return res.status(200).send(projectdepartment);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return Projectdepartment
            .create({
                project_id: req.body.project_id,
                department_id: req.body.department_id,
            })
            .then((projectdepartment) => res.status(201).send(projectdepartment))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return Projectdepartment
            .findByPk(req.params.id)
            .then(projectdepartment => {
                if (!projectdepartment) {
                    return res.status(404).send({
                        message: 'Projectdepartment Not Found',
                    });
                }
                return projectdepartment
                    .update({
                        project_id: req.body.project_id || projectdepartment.project_id,
                        department_id: req.body.department_id || projectdepartment.department_id,
                    })
                    .then(() => res.status(200).send(projectdepartment))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return Projectdepartment
            .findByPk(req.params.id)
            .then(projectdepartment => {
                if (!projectdepartment) {
                    return res.status(400).send({
                        message: 'Projectdepartment Not Found',
                    });
                }
                return projectdepartment
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};