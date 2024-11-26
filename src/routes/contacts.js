import express from 'express';
import { getAllContacts, getContactById } from '../controllers/contacts.js';

const router = express.Router();

router.get('/', getAllContacts);

router.get('/:contactId', getContactById);

export default router;
