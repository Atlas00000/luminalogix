import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import { router as protectedRoutes } from './routes/protected.routes'; // ✅ FIXED
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (_, res) => {
  res.json({ status: 'OK', message: 'Luminalogix API is running' });
});

// Auth routes
app.use('/api/auth', authRoutes);

// ✅ Protected routes
app.use('/api/protected', protectedRoutes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
