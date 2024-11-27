import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import contactsRouter from './routes/contacts.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import connectDB from './db/db.js';

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(pino());

app.use('/contacts', contactsRouter);

app.use(notFoundHandler);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
