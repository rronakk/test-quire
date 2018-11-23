
const TestCase = require('../models/TestCase');

module.exports = (app) => {

  //FINDALL: FIND ALL WITH :lId
// TODO : add a query parameter to get result by suite ID
  app.get('/api/suite/:sId/testcase/', (req, res, next) => {
    TestCase.find({suite_id: req.params.sId}).sort({date: -1})
      .then((testCase) => res.json(testCase))
      .catch((err) => next(err))
  });

  // create test case
  app.post('/api/testcase', (req, res, next) => {
    TestCase.create(req.body)
      .then((testCase) => res.json({message: "Test Case created successfully", testCase}))
      .catch((err) => next(err));
  });

//TODO : Add Update and delete of test cases
};