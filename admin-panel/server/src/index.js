const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const { notFound, isAuthenticated, errorHandler } = require('./middlewares');
const auth = require('./routes/auth');
require('dotenv').config();

const app = express();

// Connect to DB
const DB_URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;
const mongo_options = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  dbName: DB_NAME,
}
mongoose.connect(DB_URI, mongo_options)
  .then(_ => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error(err));

// Initialize passport for authentication
app.use(passport.initialize())
require('./services/passport')(passport);

// For logging requests
app.use(morgan('common'));
// For adding secure headers
app.use(helmet());
app.use(cors());
app.use(express.json())

// Routes
app.use('/auth', auth);

app.get('/test', isAuthenticated, (req, res) => {
  console.log()
  res.json({
    message: 'It works! [Authenticated]',
  });
});

// Custom middlewares
app.use(notFound);
app.use(errorHandler);

const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
