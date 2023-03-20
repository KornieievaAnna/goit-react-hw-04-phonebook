import PropTypes from 'prop-types';
import {Contacts, ButtonDelete } from './ContactList.styled';

export default function ContactList({ contacts, deleteContact }) {
  // console.log(contacts);

  return (
    <ul>
      {contacts.map(contact => (
        <Contacts key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete onClick={() => deleteContact(contact.id)}> Delete</ButtonDelete>
        </Contacts>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
