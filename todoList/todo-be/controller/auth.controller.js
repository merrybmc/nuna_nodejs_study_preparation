const authController = {};
const jwt = require('jsonwebtoken');
const User = require('../model/User');
require('dotenv').config();

authController.authenticate = (req, res, next) => {
  try {
    const tokenString = req.headers.authorization; // Bearer
    if (!tokenString) {
      throw new Error('invalid token');
    }
    const token = tokenString.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, payload) => {
      if (error) {
        throw new Error('invalid token');
      }
      //   res.status(200).json({ status: 'ok', userId: payload._id });
      req.userId = payload._id;
      next();
    });
  } catch (err) {}
};

module.exports = authController;
