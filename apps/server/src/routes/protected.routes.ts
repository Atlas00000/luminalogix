import express from 'express';
import { authenticate } from '../middleware/authMiddleware';
import { authorizeRoles } from '../middleware/roleMiddleware';
import { AuthenticatedRequest } from '../types/AuthenticatedRequest';

export const router = express.Router();

// Authenticated route for all users
router.get('/dashboard', authenticate, (req: AuthenticatedRequest, res) => {
  res.json({ message: 'Welcome to your dashboard', user: req.user });
});

// Admin-only route
router.get('/admin', authenticate, authorizeRoles('admin'), (req: AuthenticatedRequest, res) => {
  res.json({ message: 'Hello Admin 👑', user: req.user });
});

// Staff or Admin route
router.get('/staff', authenticate, authorizeRoles('admin', 'staff'), (req: AuthenticatedRequest, res) => {
  res.json({ message: 'Staff content only 📋', user: req.user });
});
