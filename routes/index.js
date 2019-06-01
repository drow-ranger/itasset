var express = require('express');
var router = express.Router();

const computerController = require('../controllers').computer;
const userController = require('../controllers').user;
const departmentController = require('../controllers').department;
const projectController = require('../controllers').project;
const projectdepartmentController = require('../controllers').projectdepartment;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Computer Router */
router.get('/api/computer', computerController.list);
router.get('/api/computer/:id', computerController.getById);
router.post('/api/computer', computerController.add);
router.put('/api/computer/:id', computerController.update);
router.delete('/api/computer/:id', computerController.delete);

/* User Router */
router.get('/api/user', userController.list);
router.get('/api/user/:id', userController.getById);
router.post('/api/user', userController.add);
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.delete);

/* Department Router */
router.get('/api/department', departmentController.list);
router.get('/api/department/:id', departmentController.getById);
router.post('/api/department', departmentController.add);
router.put('/api/department/:id', departmentController.update);
router.delete('/api/department/:id', departmentController.delete);

/* Project Router */
router.get('/api/project', projectController.list);
router.get('/api/project/:id', projectController.getById);
router.post('/api/project', projectController.add);
router.put('/api/project/:id', projectController.update);
router.delete('/api/project/:id', projectController.delete);

/* Projectdepartment Router */
router.get('/api/projectdepartment', projectdepartmentController.list);
router.get('/api/projectdepartment/:id', projectdepartmentController.getById);
router.post('/api/projectdepartment', projectdepartmentController.add);
router.put('/api/projectdepartment/:id', projectdepartmentController.update);
router.delete('/api/projectdepartment/:id', projectdepartmentController.delete);

module.exports = router;
