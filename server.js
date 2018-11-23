const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes

require("./routes/projectRoutes")(app);
require("./routes/suiteRoutes")(app);
require("./routes/testcaseRoutes")(app);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/testquire";

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

if(['production'].includes(process.env.NODE_ENV)){
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});