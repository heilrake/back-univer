import jwt from 'jsonwebtoken';

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, 'secret123', { expiresIn: '24h' });
};

export default generateAccessToken;
