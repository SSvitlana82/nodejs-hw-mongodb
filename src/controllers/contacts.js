import {
  getAllContacts,
  getContactById,
  createContact,
} from '../services/contacts.js';

export const getContactsController = async (req, res) => {
  const contacts = await getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactcByIdController = async (req, res) => {
  const contactId = req.params.contactId;

  const contact = await getContactById(contactId);

  if (contact) {
    res.json({
      status: 200,
      data: contact,
      message: `Successfully found contact with id ${contactId}!`,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: 'Not found',
      data: { message: 'Contact not found' },
    });
  }
};

export const createContactController = async (req, res) => {
  const contact = await createContact(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
};
