
const Suite = require('../models/Suite');

module.exports = (app) => {

// CREATE
  app.post('/api/suite', (req, res, next) => {
    Suite.create(req.body)
      .then((suite) => res.json({message: "Suite created successfully", suite}))
      .catch((err) => next(err));
  });

// get all suites
// TODO : add a query parameter to get result by project ID
  app.get('/api/project/:pId/suite', (req, res, next) => {
    Suite.find({project_id: req.params.pId})
      .populate("test_cases")
      .then((suites) => res.json(suites))
      .catch((err) => next(err));
  });

//DELETE: DELETE ITSELF WITH :sId
  app.delete('/api/suite/:id', (req, res, next) => {
    Suite.findOneAndRemove({_id: req.params.id})
      .exec()
      .then(() => res.json({message: "Suite deleted successfully"}))
      .catch((err) => next(err));
  });

//UPDATE: UPDATE ITSELF WITH :sId
  app.put("/api/suite/:sId", (req, res, next) => {
    Suite.findOneAndUpdate(
      {_id: req.params.sId},
      {$set: {suite_name: req.body.suite_name}},
      {new: true}
    )
      .exec()
      .then((suite) => res.json({message: "Suite updated successfully", suite}))
      .catch(err => next(err));
  });

};