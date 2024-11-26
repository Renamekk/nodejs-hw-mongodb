import Contact from '../models/contacts.js';

export const fetchAllContacts = async () => {
  return await Contact.find();
};

export const fetchContactById = async (contactId) => {
  return await Contact.findById(contactId);
};
