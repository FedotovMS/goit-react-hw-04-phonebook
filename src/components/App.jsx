import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts && parsedContacts.length > 0) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const handleDelete = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const formSubmitHandler = data => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    setContacts(prevState => [...prevState, newContact]);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      {/* {filteredContacts.length > 0 && ( */}
      <>
        <Filter filter={filter} onSearch={handleFilter} />
        <ContactList contacts={filteredContacts} onDelete={handleDelete} />
      </>
      {/* )} */}
    </div>
  );
}
