import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import phonebookActions from '../../redux/actions';
import styles from './ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  const onSubmit = value => dispatch(phonebookActions.addContact(value));

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        <span className={styles.message}>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={handleInput}
          required
          placeholder="add name..."
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        <span className={styles.message}>Phone number</span>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={handleInput}
          required
          placeholder="add number..."
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button} title="Добавить новый контакт">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
