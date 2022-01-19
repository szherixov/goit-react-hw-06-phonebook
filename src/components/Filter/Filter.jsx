import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import phonebookActions from '../../redux/actions';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = event => dispatch(phonebookActions.filterContacts(event.target.value));
  const value = useSelector(getFilter);

  return (
    <div className={styles.section}>
      <label>
        <h2 className={styles.title}>Find contact by name</h2>
        <input
          type="text"
          name="name"
          value={value}
          onChange={onChange}
          className={styles.input}
          placeholder="find name..."
        />
      </label>
    </div>
  );
};

export default Filter;
