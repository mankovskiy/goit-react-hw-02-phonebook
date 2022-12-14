import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            handleDeleteContact={handleDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  handleDeleteContact: PropTypes.func,
};
