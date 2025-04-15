import { RequestHandler } from 'express';
import { AuthenticatedRequest } from '../types/AuthenticatedRequest';

export const authorizeRoles = (...roles: string[]): RequestHandler => {
  return (req, res, next) => {
    const user = (req as AuthenticatedRequest).user;

    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ message: 'Forbidden: Access denied' });
    }

    next();
  };
};
