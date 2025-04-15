import express from 'express';
import { authenticate } from '../middleware/authMiddleware';
import { authorizeRoles } from '../middleware/roleMiddleware';
import { AuthenticatedRequest } from '../types/AuthenticatedRequest';

export const router = express.Router();

router.get('/dashboard', authenticate, (req, res) => {
  const user = (req as AuthenticatedRequest).user;
  res.json({ message: 'Welcome to your dashboard', user });
});

router.get('/admin', authenticate, authorizeRoles('admin'), (req, res) => {
  const user = (req as AuthenticatedRequest).user;
  res.json({ message: 'Hello Admin 👑', user });
});

router.get('/staff', authenticate, authorizeRoles('admin', 'staff'), (req, res) => {
  const user = (req as AuthenticatedRequest).user;
  res.json({ message: 'Staff content only 📋', user });
});
