import express, { json, Router, urlencoded } from 'express';
import cors from "cors";
import './src/config/dbConfig.js';
import meterRoutes from './src/routers/meterRoutes.js';
import userRoutes from './src/routers/userRouters.js';
import authRoutes from './src/routers/authRouters.js';
import tokenRouters from './src/routers/tokenRouters.js';

import swaggerJSDoc from 'swagger-jsdoc';
import SwaggerUiOptions from 'swagger-ui-express';

const option={
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Electricity seller API',
        version: '1.0.0',
        description: 'API documentation for Electricity seller',
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            in: 'header',
            bearerFormat: 'JWT',
          }
        }
      },
      security: [{
        bearerAuth: []
      }],
      servers: [
        {
          url: 'http://localhost:4000/api/v1',
          description: 'Local server',
        },
      ],
    },
    
    apis: ['./src/routers/*.js'],
}


const app = express();
app.use(cors());

app.use(json());
app.use(urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to electricity seller");
});

app.use('/api/v1',meterRoutes);
app.use('/api/v1',tokenRouters);
app.use('/api/v1',userRoutes);
app.use('/api/v1',authRoutes);

const specs = swaggerJSDoc(option);
app.use("/api-docs", SwaggerUiOptions.serve, SwaggerUiOptions.setup(specs));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. I.C`);
});