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
  apis: ['./src/routes/*.tsx'] // ⬅️ scans every route file for annotations
};

export const swaggerSpec = swaggerJsdoc(options);
export { swaggerUi };
