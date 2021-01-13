import { useState } from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import useLocalStorage from '../components/hooks/useLocalStorage';

import { Container, MainTitle, ContactTitle } from './AppStyles';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('userContacts', []);
  const [filter, setFilter] = useState('');

  const handleCheckUnique = verifiableName => {
    const handleName = verifiableName.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === handleName);
  };

  const handleAddContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterChange = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  const handleRemoveContact = contactId => {
    setContacts(prevContacts => [
      ...prevContacts.filter(({ id }) => id !== contactId),
    ]);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filterContacts = getVisibleContacts();

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactTitle>Form Contact</ContactTitle>
      <ContactForm
        handleAddContact={handleAddContact}
        handleCheckUnique={handleCheckUnique}
      />
      <ContactTitle>Contacts List</ContactTitle>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList contacts={filterContacts} onRemove={handleRemoveContact} />
    </Container>
  );
}
