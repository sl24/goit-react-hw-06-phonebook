import { useState } from 'react';
import shortid from 'shortid';
import { Form, InputForm, Button } from './ContactFormStyles';
import PropTypes from 'prop-types';

export default function ContactForm({ handleAddContact, handleCheckUnique }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const repeatName = handleCheckUnique(name);

    if (repeatName) {
      alert(`${name} is already in contacts list`);
    } else {
      const newContact = { id: shortid.generate(), name, phone };
      handleAddContact(newContact);
    }

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <InputForm
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleChangeForm}
        required
      />
      <InputForm
        type="tel"
        name="phone"
        placeholder="Enter phone number"
        value={phone}
        onChange={handleChangeForm}
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = { handleCheckUnique: PropTypes.func.isRequired };
