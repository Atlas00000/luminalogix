import { Router } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Luminalogix API',
      version: '1.0.0',
      description: 'Auto‑generated Swagger docs for Luminalogix backend'
    },
    servers: [{ url: 'http://localhost:5000' }]
  },
  // Scan both .ts and .tsx route files
  apis: ['src/routes/*.{ts,tsx}']
};

export const swaggerSpec = swaggerJsdoc(options);
export { swaggerUi };

/* ➕ Router to serve raw JSON for CI / Postman conversion */
export const swaggerJsonRouter = Router();
import { Request, Response } from 'express';

swaggerJsonRouter.get('/docs-json', (req: Request, res: Response) => {
  res.json(swaggerSpec);
});
