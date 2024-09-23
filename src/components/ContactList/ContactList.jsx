import Contact from '../Contact/Contact.jsx';
import styles from './ContactList.module.css';

const ContactList = ({list, deleteContact}) => {
  return (
    <ul className={styles.contactList}>
      {list.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDelete={(id) => deleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
