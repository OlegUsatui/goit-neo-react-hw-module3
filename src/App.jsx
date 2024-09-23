import './App.module.css';
import { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import styles from './App.module.css';
import initContacts from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(initContacts);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.number.includes(searchQuery)
  );

  const addContact = (contact) => {
    const newContact = {
      ...contact,
      id: contacts.length
    }
    const contactsArr = [...contacts, newContact]
    setContacts(contactsArr)
  }
  const deleteContact = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts([...newContacts])
  };

  const searchContacts = (val) => {
    setSearchQuery(val)
  }

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact}/>
      <SearchBox value={searchQuery} handleChange={searchContacts} />
      <ContactList list={filteredContacts} deleteContact={(id) => deleteContact(id)} />
    </div>
  );
}

export default App;
