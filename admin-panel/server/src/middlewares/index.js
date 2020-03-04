const jwt = require('jsonwebtoken');
require('dotenv').config();

const notFound = (req, res, next) => {
  const err = new Error(`Not found at ${req.originalUrl}`);
  res.status(404);
  next(err);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? 'StackTrace' : err.stack
  });
};

const isAuthenticated = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  req.userId = decodedToken.userId;
  next();
};

module.exports = {
  notFound, 
  errorHandler,
  isAuthenticated
}