const Department = require('../models').Department;
const User = require('../models').User;
const Project = require('../models').Project;

module.exports = {
  list(req, res) {
    return Department
      .findAll({
        include: [],
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((departments) => res.status(200).send(departments))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Department
      .findByPk(req.params.id, {
        include: [{
          model: User,
          as: 'users'
        },
        {
          model: Project,
          as: 'projects'
        }],
      })
      .then((department) => {
        if (!department) {
          return res.status(404).send({
            message: 'Department Not Found',
          });
        }
        return res.status(200).send(department);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Department
      .create({
        id: req.body.id,
        department_head: req.body.department_head,
        department_description: req.body.department_description,
      })
      .then((department) => res.status(201).send(department))
      .catch((error) => res.status(400).send(error));
  },

  addDepartmentWithUser(req, res) {
    return Department
      .create({
        id: req.body.id,
        department_head: req.body.department_head,
        department_description: req.body.department_description,
      }, {
      	include: [{
          model: User,
          as: 'users'
        }]
      })
      .then((department) => res.status(201).send(department))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Department
      .findByPk(req.params.id)      
      .then(department => {
        if (!department) {
          return res.status(404).send({
            message: 'Department Not Found',
          });
        }
        return department
          .update({
            department_head: req.body.department_head || department.department_head,
            department_description: req.body.department_description || department.department_description,
          })
          .then(() => res.status(200).send(department))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Department
      .findByPk(req.params.id)
      .then(department => {
        if (!department) {
          return res.status(400).send({
            message: 'Department Not Found',
          });
        }
        return department
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};