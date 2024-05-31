import { contactsCollection } from '../db/models/contact.js';
export const getAllContacts = async () => {
  const contacts = await contactsCollection.find();
  return contacts;
};

export const getContactById = async (id) => {
  console.log(id);
  const contact = await contactsCollection.findById(id);
  return contact;
};
