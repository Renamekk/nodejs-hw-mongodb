import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Contact from './src/models/contacts.js';
import contactsData from './contacts.json' assert { type: 'json' };

dotenv.config();

const importContacts = async () => {
  try {
    const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env;
    const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}`;
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB.');

    await Contact.deleteMany();
    console.log('Old contacts removed.');

    await Contact.insertMany(contactsData);
    console.log('New contacts imported successfully.');

    process.exit();
  } catch (error) {
    console.error('Error importing contacts:', error.message);
    process.exit(1);
  }
};

importContacts();
