const Computer = require('../models').Computer;
const User = require('../models').User;

module.exports = {
  list(req, res) {
    return Computer
      .findAll({
        include: [],
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((computers) => res.status(200).send(computers))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Computer
      .findByPk(req.params.id, {
        include: [{
          model: User,
          as: 'user'
        }],
      })
      .then((computer) => {
        if (!computer) {
          return res.status(404).send({
            message: 'Computer Not Found',
          });
        }
        return res.status(200).send(computer);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Computer
      .create({
        id: req.body.id,
        motherboard: req.body.motherboard,
        processor: req.body.processor,
        memory: req.body.memory,
        harddisk: req.body.harddisk,
        os: req.body.os,
        user_id: req.body.user_id,
      })
      .then((computer) => res.status(201).send(computer))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Computer
      .findByPk(req.params.id)      
      .then(computer => {
        if (!computer) {
          return res.status(404).send({
            message: 'Computer Not Found',
          });
        }
        return computer
          .update({
            motherboard: req.body.motherboard || computer.motherboard,
            processor: req.body.processor || computer.processor,
            memory: req.body.memory || computer.memory,
            harddisk: req.body.harddisk || computer.harddisk,
            os: req.body.os || computer.os,
            user_id: req.body.user_id || computer.user_id,
          })
          .then(() => res.status(200).send(computer))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Computer
      .findByPk(req.params.id)
      .then(computer => {
        if (!computer) {
          return res.status(400).send({
            message: 'Computer Not Found',
          });
        }
        return computer
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};