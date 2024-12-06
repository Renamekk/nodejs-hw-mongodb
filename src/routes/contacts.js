import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  updateContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { authenticate } from '../middlewares/authenticate.js';

const contactsRouter = Router();

contactsRouter.use(authenticate);
contactsRouter.get('/contacts', ctrlWrapper(getContactsController));
contactsRouter.get(
  '/contacts/:contactId',
  ctrlWrapper(getContactByIdController),
);
contactsRouter.post('/contacts', ctrlWrapper(createContactController));
contactsRouter.patch(
  '/contacts/:contactId',
  ctrlWrapper(updateContactController),
);
contactsRouter.delete(
  '/contacts/:contactId',
  ctrlWrapper(deleteContactController),
);

export default contactsRouter;