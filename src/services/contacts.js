import ContactsCollection from '../db/contactModel.js';

export const getContacts = () => ContactsCollection.find();

export const getContactById = (id) => ContactsCollection.findById(id);