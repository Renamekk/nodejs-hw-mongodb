import express from 'express';
import { getAllContacts, getContactById, createContact, updateContact, deleteContact } from '../controllers/contacts.js';

const router = express.Router();

router.get('/', getAllContacts);
router.get('/:contactId', getContactById);
router.post('/', createContact);
router.patch('/:contactId', updateContact);
router.delete('/:contactId', deleteContact);

export default router;
