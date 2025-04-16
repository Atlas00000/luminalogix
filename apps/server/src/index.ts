import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes';
import { router as protectedRoutes } from './routes/protected.routes';
import { errorHandler } from './middleware/errorHandler';

/* ➕ Swagger */
import { swaggerUi, swaggerSpec } from './swagger';

dotenv.config();

const app = express();

/* ────── Global Middleware ────── */
app.use(cors());
app.use(express.json());

/* ────── Swagger Docs ────── */
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* ────── Health Check ────── */
app.get('/api/health', (_, res) => {
  res.json({ status: 'OK', message: 'Luminalogix API is running' });
});

/* ────── Public Routes ────── */
app.use('/api/auth', authRoutes);

/* ────── Protected Routes ────── */
app.use('/api/protected', protectedRoutes);

/* ────── Global Error Handler ────── */
app.use(errorHandler);

/* ────── Start Server ────── */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀  Server running at http://localhost:${PORT}`);
  console.log(`📚  Swagger docs at http://localhost:${PORT}/api/docs`);
});
