import { fetchAllContacts, fetchContactById, createNewContact, updateExistingContact, deleteExistingContact } from '../services/contacts.js';
import httpErrors from 'http-errors';

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await fetchAllContacts();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch contacts.',
      error: error.message,
    });
  }
};

export const getContactById = async (req, res) => {
  const { contactId } = req.params;

  try {
    const contact = await fetchContactById(contactId);

    if (!contact) {
      throw httpErrors(404, 'Contact not found');
    }

    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message,
    });
  }
};

export const createContact = async (req, res) => {
  const { name, phoneNumber, email, isFavourite, contactType } = req.body;

  try {
    const contact = await createNewContact({ name, phoneNumber, email, isFavourite, contactType });
    res.status(201).json({
      status: 201,
      message: 'Successfully created a contact!',
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create contact.',
      error: error.message,
    });
  }
};

export const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const { name, phoneNumber, email, isFavourite, contactType } = req.body;

  try {
    const contact = await updateExistingContact(contactId, { name, phoneNumber, email, isFavourite, contactType });

    if (!contact) {
      throw httpErrors(404, 'Contact not found');
    }

    res.status(200).json({
      status: 200,
      message: 'Successfully patched a contact!',
      data: contact,
    });
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message,
    });
  }
};

export const deleteContact = async (req, res) => {
  const { contactId } = req.params;

  try {
    const contact = await deleteExistingContact(contactId);

    if (!contact) {
      throw httpErrors(404, 'Contact not found');
    }

    res.status(204).send();
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message,
    });
  }
};
