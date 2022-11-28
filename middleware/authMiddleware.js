import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next(); // по цепочці викликаємо настіпні middleware
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(403).json({ message: "User isn't authorization" });
    }
    const decodedData = jwt.verify(token, 'parol123');

    req.user = decodedData;

    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: "User isn't authorization" });
  }
};

export default authMiddleware;
