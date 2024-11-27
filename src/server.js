import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { env } from './utils/env.js';
import contactsRouter from './routers/contacts.js';

const PORT = Number(env('PORT', 3000));

const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.use(cors());

  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(logger);

  app.use(contactsRouter);


  app.use((req, res) => {
    res.status(404).json({
      message: `${req.url} not found`,
    });
  });


  app.use((error, req, res)=> {
    res.status(500).json({
        message: error.message,
    });
});

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

export default setupServer;