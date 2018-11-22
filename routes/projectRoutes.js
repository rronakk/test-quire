const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.post('/project', (req, res, next) => {
  const project = new Project(req.body);
  console.log(project)
  project.save()
    .then(() => res.json(project))
    .catch((err) => next(err));
});

//get all projects
router.get('/project', (req, res, next) => {
  Project.find()
  .populate("libraries")
    .then((projects) => res.json(projects))
    .catch((err) => next(err));
});

// get one project
router.get('/project/:pId', (req, res, next) => {
  Project.findById(req.params.pId)
    .populate("libraries")
    .then((projects) => res.json(projects))
    .catch((err) => next(err));
});

router.delete('/project/:pId', function (req, res, next) {
  Project.findOneAndRemove({ _id: req.params.pId })
    .exec()
    .then(() => res.json("Project deleted successfully"))
    .catch((err) => next(err));
});

router.put('/project/:pId', (req, res, next) => {
  Project.findOneAndUpdate(
    { _id: req.params.pId },
    { $set: { project_name: req.body.project_name} }, { new: true })
    .exec()
    .then((project) => res.json(project))
    .catch((err) => next(err));
});

module.exports = router;
