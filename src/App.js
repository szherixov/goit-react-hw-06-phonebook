import React from 'react';
import Form from './components/ContactForm';
import Contacts from './components/ContactList';
import Filter from './components/Filter';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Phonebook</h1>
      <Form />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}
