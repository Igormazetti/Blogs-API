const { validateToken } = require('../services/jwt.service');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const user = validateToken(authorization);
  if (!user) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = tokenValidation;