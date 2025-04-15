import express from 'express';
import { authenticate } from '../middleware/authMiddleware';
import { authorizeRoles } from '../middleware/roleMiddleware';

export const router = express.Router();

// Authenticated route for all users
router.get('/dashboard', authenticate, (req, res) => {
  res.json({ message: 'Welcome to your dashboard', user: req.user });
});

// Admin-only route
router.get('/admin', authenticate, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Hello Admin 👑' });
});

// Staff or Admin route
router.get('/staff', authenticate, authorizeRoles('admin', 'staff'), (req, res) => {
  res.json({ message: 'Staff content only 📋' });
});
