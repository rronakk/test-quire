const express = require('express');
const router = express.Router();
const TestCase = require('../models/TestCase');

  //FINDALL: FIND ALL WITH :lId
// TODO : add a query parameter to get result by suite ID
  router.get('/suite/:sId/testcase/', (req, res, next) => {
    TestCase.find( {suite_id: req.params.sId} ).sort({ date: -1 })
      .then((testCase) => res.json(testCase))
      .catch((err) => next(err))
  });


  // create test case
  router.post('/testcase', (req, res, next) => {
    TestCase.create(req.body)
      .then((testCase) => res.json(testCase))
      .catch((err) => next(err));
  });

//TODO : Add Update and delete of test cases
module.exports = router;
