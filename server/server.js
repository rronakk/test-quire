const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const projectRouter = require('./routes/projectRoutes');
const suiteRouter = require('./routes/suiteRoutes');
const testCaseRouter = require('./routes/testcaseRoutes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/testquire";

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


app.use('/api', projectRouter);
app.use('/api', suiteRouter);
app.use('/api', testCaseRouter);

module.exports = app;
