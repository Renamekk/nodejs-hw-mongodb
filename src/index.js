import dotenv from 'dotenv';
import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';



dotenv.config();

const startApp = async () => {
  try {
    await initMongoConnection();
    setupServer();
  } catch (error) {
    console.error('Error starting the application:', error.message);
    process.exit(1);
  }
};

startApp();
