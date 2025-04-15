import jwt, { JwtPayload } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'defaultsecret';

export const generateToken = (userId: number, role: string): string => {
  return jwt.sign({ userId, role }, secret, { expiresIn: '7d' });
};

export const verifyToken = (token: string): JwtPayload | string => {
  return jwt.verify(token, secret);
};
