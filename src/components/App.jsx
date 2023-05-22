import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filer from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const formSubmitHandler = data => {
    const preCheck = contacts.some(
      ({ name, number }) =>
        name.toLowerCase() === data.name.toLowerCase() || number === data.number
    );

    if (preCheck) {
      alert(`Sorry, contact ${data.name} is already exists`);
      return;
    }
    const contact = {
      id: nanoid(),
      ...data,
    };

    setContacts([contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div style={{ paddingLeft: 15 }}>
      <h1 className="contact_title">Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2 className="contact__title">Contacts</h2>
      <Filer value={filter} onChange={changeFilter} />
      {visibleContacts.length > 0 && (
        <ContactList
          visibleContacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      )}
    </div>
  );
}
