import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
import shortid from 'shortid';

const addContact = createAction('add/Contact', contact => ({
  payload: {
    id: shortid.generate(),
    ...contact,
  },
}));
const deleteContact = createAction('delete/Contact');
const filterContact = createAction('contact/Filter');

export { addContact, deleteContact, filterContact };
