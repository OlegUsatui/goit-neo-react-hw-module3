import styles from './Contact.module.css';

const Contact = ({ contact, handleDelete }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <div>
          <p><span className={styles.icon}>&#128100;</span>{contact.name}</p>
          <p><span className={styles.icon}>&#128222;</span>{contact.number}</p>
        </div>
      </div>
      <button className={styles.deleteBtn} onClick={() => handleDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;

