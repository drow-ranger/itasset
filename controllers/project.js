const Project = require('../models').Project;
const Department = require('../models').Department;

module.exports = {
  list(req, res) {
    return Project
      .findAll({
        include: [],
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((projects) => res.status(200).send(projects))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Project
      .findByPk(req.params.id, {
        include: [{
          model: Department,
          as: 'departments'
        }],
      })
      .then((project) => {
        if (!project) {
          return res.status(404).send({
            message: 'Project Not Found',
          });
        }
        return res.status(200).send(project);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Project
      .create({
        id: req.body.id,
        project_head: req.body.project_head,
        project_description: req.body.project_description,
      })
      .then((project) => res.status(201).send(project))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Project
      .findByPk(req.params.id)      
      .then(project => {
        if (!project) {
          return res.status(404).send({
            message: 'Project Not Found',
          });
        }
        return project
          .update({
            project_head: req.body.project_head || project.project_head,
            project_description: req.body.project_description || project.project_description,
          })
          .then(() => res.status(200).send(project))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Project
      .findByPk(req.params.id)
      .then(project => {
        if (!project) {
          return res.status(400).send({
            message: 'Project Not Found',
          });
        }
        return project
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};