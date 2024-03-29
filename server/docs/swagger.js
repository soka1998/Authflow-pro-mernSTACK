import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AuthFlow Pro ',
      description: "authentication functionalities with role and permission management",
      contact: {
        name: "Soukaina Harifi",
        url: "https://github.com/soka1998/Authflow-pro-mernSTACK.git"
      },
      version: '1.0.0',
    },
    servers: [
      {
        url: "http://localhost:4000/",
        description: "Local server"
      }
    ]
  },
  // Specify the correct path for your routes
  apis: [path.join(__dirname, '../routes/*.js')],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app, port) => {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

export default swaggerDocs;
