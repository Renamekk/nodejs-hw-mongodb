import Contact from '../models/contacts.js';

export const fetchAllContacts = async () => {
  return await Contact.find();
};

export const fetchContactById = async (contactId) => {
  return await Contact.findById(contactId);
};

export const createNewContact = async (data) => {
  const contact = new Contact(data);
  return await contact.save();
};

export const updateExistingContact = async (contactId, data) => {
  return await Contact.findByIdAndUpdate(contactId, data, { new: true });
};

export const deleteExistingContact = async (contactId) => {
  return await Contact.findByIdAndDelete(contactId);
};
