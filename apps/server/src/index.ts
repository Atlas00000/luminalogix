import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import { router as protectedRoutes } from './routes/protected.routes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/api/health', (_, res) => {
  res.json({ status: 'OK', message: 'Luminalogix API is running' });
});

// Public routes
app.use('/api/auth', authRoutes);

// Protected routes (requires JWT + role check)
app.use('/api/protected', protectedRoutes);

// Global error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
